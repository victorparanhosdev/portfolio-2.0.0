'use client'
import { useState, useEffect, ChangeEvent, FormEvent, FormEventHandler } from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { SkeletonAllProjects } from "./SkeletonAllProjects";
import { CardAllProjects } from "@/components/CardAllProjects";
import { GitHubRepo } from "@/types/GithubTypes";
import { SmileySad } from "@phosphor-icons/react/dist/ssr";
import { useDebouncedCallback } from 'use-debounce';

interface GitHubSearchResponse {
    items: GitHubRepo[]
    total_count: number
    incomplete_results: boolean
} 

export default function AllProjetos() {
    const [dataRepos, setDataRepos] = useState<GitHubSearchResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);


    const fetchProjects = async (query: string = '', page: number = 1) => {
        setLoading(true);

        try {
            const user = 'victorparanhosdev';
            const encodedQuery = encodeURIComponent(`${query} user:${user}`);
            const perPage = 10;
            const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';
            const response = await fetch(`https://api.github.com/search/repositories?q=${encodedQuery}&sort=updated_at&per_page=${perPage}&page=${page}`, {
                headers: {
                    Authorization: `token ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }
            const data: GitHubSearchResponse = await response.json();

            setDataRepos(data);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); 
        const form = event.target as HTMLFormElement;
        const input = form.querySelector('input[id="search"]') as HTMLInputElement; 
        const inputValue = input.value
        fetchProjects(inputValue, 1);
        setCurrentPage(1)
        
    }

    const debouncedFetchProjects = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value
        fetchProjects(query, 1);
    }, 600);

    useEffect(() => {
        fetchProjects('', currentPage);
    }, [currentPage]);

   
    const totalPages = Math.ceil((dataRepos?.total_count ? dataRepos.total_count : 1) / 10)

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <main className="bg-white text-blue-light-100 dark:bg-gray-dark-500 dark:text-gray-dark-300">
            <section className="py-16 container-personalizado">
                <h1 className="text-center text-3xl mb-8 text-blue-light-400 dark:text-gray-dark-400 font-extrabold">
                    Todos os projetos
                </h1>

                <div className="flex items-center w-full gap-2 sm:gap-5 mb-7">
                    <Link
                        scroll={false}
                        href="/"
                        className="p-4 flex items-center gap-3 text-blue-light-200 dark:text-gray-dark-400 opacity-80 hover:opacity-100"
                    >
                        <FaArrowLeft /> Voltar
                    </Link>

                    <form onSubmit={handleSubmit} className="flex-1 relative">
                        <label htmlFor="search" className="sr-only">Buscar por nome:</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do projeto"
                            id="search"
                            name="search"
                            onChange={debouncedFetchProjects}
                            className="pl-4 py-2.5 pr-12 w-full rounded-lg focus:outline-none border dark:border-gray-dark-300 dark:focus:border-blue-dark-100 transition-all hover:bg-[#f0f6ff38] duration-500 dark:focus:ring-1 dark:focus:ring-offset-blue-dark-100 dark:text-gray-dark-400 dark:hover:bg-black/15 border-blue-light-100 focus:ring-1 focus:ring-[#009fff4f] text-blue-light-400"
                        />
                        <button type="submit" className="absolute top-[50%] -translate-y-[50%] right-[15px] z-[2] cursor-pointer text-blue-light-200 dark:text-gray-dark-400">
                            <MagnifyingGlass size={24} />
                        </button>
                    </form>
                </div>
               { (dataRepos && dataRepos?.items.length > 0 ) && <span className="flex justify-end mb-4 text-blue-light-400 dark:text-gray-dark-400">
                            Página {totalPages <= 1 ? 1 : currentPage} de {totalPages}
                </span>}
                <div className="grid grid-cols-allprojects gap-4">
                    {loading ? (
                        <SkeletonAllProjects />
                    ) : dataRepos!.items.length > 0 ? (
                        dataRepos!.items.map((repo) => (
                            <CardAllProjects key={repo.id} projects={repo} />
                        ))
                    ) : (
                        <div className="flex flex-wrap justify-center items-center gap-3 text-blue-light-200 dark:text-gray-dark-300">
                            <p className="text-center text-base sm:text-lg md:text-xl align-baseline">Nenhum repositório encontrado.</p>
                            <SmileySad size={28} weight="light" />
                        </div>
                    )}
                </div>
                { (dataRepos && dataRepos?.items.length > 0 ) && (totalPages > 1) &&
                <div className="flex justify-center mt-8">
                    <nav className="flex items-center space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 border rounded-lg text-blue-light-400 dark:text-gray-dark-400 border-blue-light-100 dark:border-gray-dark-300 bg-blue-light-100 dark:bg-gray-dark-100 enabled:hover:bg-blue-light-200 dark:enabled:hover:bg-gray-dark-500 
                              ${currentPage === 1 ? 'opacity-50 ' : ''}`}
                        >
                            Anterior
                        </button>
                        <span className="text-blue-light-400 dark:text-gray-dark-400">
                            Página {currentPage} de {totalPages}
                        </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 border rounded-lg text-blue-light-400 dark:text-gray-dark-400 border-blue-light-100 dark:border-gray-dark-300 bg-blue-light-100 dark:bg-gray-dark-100 enabled:hover:bg-blue-light-200 dark:enabled:hover:bg-gray-dark-500 
                              ${currentPage === totalPages ? 'opacity-50 ' : ''}`}
                        >
                            Próxima
                        </button>
                    </nav>
                </div> }
            </section>
        </main>
    );
}
