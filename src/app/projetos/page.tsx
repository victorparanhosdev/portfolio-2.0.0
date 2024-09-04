'use client'
import { useState, useEffect } from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { SkeletonAllProjects } from "./SkeletonAllProjects";
import { CardAllProjects } from "@/components/CardAllProjects";
import { GitHubRepo } from "@/types/GithubTypes";
import { SmileySad } from "@phosphor-icons/react/dist/ssr";
import { useDebouncedCallback } from 'use-debounce';

interface GitHubSearchResponse {
    items: GitHubRepo[];
    total_count: number;
}

export default function AllProjetos() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalCount, setTotalCount] = useState<number>(0);

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
            setRepos(data.items);
            setTotalCount(data.total_count);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const debouncedFetchProjects = useDebouncedCallback((query) => {
        fetchProjects(query, 1);
    }, 500);

    useEffect(() => {
        fetchProjects(searchQuery, currentPage);
    }, [currentPage, searchQuery]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        setCurrentPage(1);
        debouncedFetchProjects(query);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentPage(1);
        fetchProjects(searchQuery, 1);
    };

    const totalPages = Math.ceil(totalCount / 10)

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

                <div className="flex items-center w-full gap-2 sm:gap-5 mb-10">
                    <Link
                        scroll={false}
                        href="/"
                        className="p-4 flex items-center gap-3 text-blue-light-200 dark:text-gray-dark-400 opacity-80 hover:opacity-100"
                    >
                        <FaArrowLeft /> Voltar
                    </Link>

                    <form onSubmit={handleSearchSubmit} className="flex-1 relative">
                        <label htmlFor="search" className="sr-only">Buscar por nome:</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do projeto"
                            id="search"
                            name="search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="pl-4 py-2.5 pr-12 w-full rounded-lg focus:outline-none border dark:border-gray-dark-300 dark:focus:border-blue-dark-100 transition-all hover:bg-[#f0f6ff38] duration-500 dark:focus:ring-1 dark:focus:ring-offset-blue-dark-100 dark:text-gray-dark-400 dark:hover:bg-black/15 border-blue-light-100 focus:ring-1 focus:ring-[#009fff4f] text-blue-light-400"
                        />
                        <button type="submit" className="absolute top-[50%] -translate-y-[50%] right-[15px] z-[2] cursor-pointer text-blue-light-200 dark:text-gray-dark-400">
                            <MagnifyingGlass size={24} />
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-allprojects gap-4">
                    {loading ? (
                        <SkeletonAllProjects />
                    ) : repos.length > 0 ? (
                        repos.map((repo) => (
                            <CardAllProjects key={repo.id} projects={repo} />
                        ))
                    ) : (
                        <div className="flex flex-wrap justify-center items-center gap-3 text-blue-light-200 dark:text-gray-dark-300">
                            <p className="text-center text-base sm:text-lg md:text-xl align-baseline">Nenhum repositório encontrado.</p>
                            <SmileySad size={28} weight="light" />
                        </div>
                    )}
                </div>

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
                </div>
            </section>
        </main>
    );
}
