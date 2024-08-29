import { CardAllProjects } from "@/components/CardAllProjects";
import { GitHubRepo } from "@/types/GithubTypes";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function AllProjetos() {

    const response: GitHubRepo[] = await fetch('https://api.github.com/users/victorparanhosdev/repos?sort=updated_at').then(data => {
        if (!data.ok) {
            throw new Error('Erro ao buscar os dados');
        }
        
        return data.json()
    }).catch((error)=> console.log(error));;


    return (
      <main className="bg-white text-blue-light-100 dark:bg-gray-dark-500 dark:text-gray-dark-300">
            <section className="py-16 container-personalizado">
                <h1 className="text-center text-3xl mb-8 text-blue-light-400 dark:text-gray-dark-400 font-extrabold">
                    Todos os projetos
                </h1>

                <div className="flex items-center w-full gap-2 sm:gap-5 mb-10">
                    <Link scroll={false} href="/" className="p-4 flex items-center gap-3 text-blue-light-200 dark:text-gray-dark-400 opacity-80 hover:opacity-100">
                        <FaArrowLeft /> Voltar
                    </Link>

                    <form className="flex-1 relative">
                        <label htmlFor="search" className="sr-only">Buscar por nome:</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do projeto"
                            id="search"
                            className="pl-4 py-2.5 pr-12 w-full rounded-lg focus:outline-none border dark:border-gray-dark-300 dark:focus:border-blue-dark-100 transition-all hover:bg-[#f0f6ff38] duration-500 dark:focus:ring-1 dark:focus:ring-offset-blue-dark-100 dark:text-gray-dark-400 dark:hover:bg-black/15 border-blue-light-100 focus:ring-1 focus:ring-[#009fff4f] text-blue-light-400"
                        />
                        <button type="submit" className="absolute top-[50%] -translate-y-[50%] right-[15px] z-[2] cursor-pointer text-blue-light-200 dark:text-gray-dark-400">
                            <MagnifyingGlass size={24} />
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-allprojects gap-4">
     
                    {response.map(repo => (
                        <CardAllProjects data-aos="flip-left" data-aos-once="false" data-aos-duration="300" key={repo.id} projects={repo} />
                    ))}
            
                </div>
            </section>
        </main>
    );
}
