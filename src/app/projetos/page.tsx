import { Card } from "@/components/Card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";


export default async function AllProjetos(){

    const dados = await fetch('https://api.github.com/users/victorparanhosdev/repos').then(data => data.json())


    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <section className="py-32 container-personalizado">
                <h1 className="text-center text-4xl mb-10">Todos os projetos</h1>

            <div className="flex items-center mb-10 w-full gap-5">
            <Link href={"/"} className="p-5 text-white flex items-center gap-3"><FaArrowLeft /> Voltar</Link>

            <div className="flex-1">
                <label htmlFor="search" className="sr-only">Buscar por nome:</label>
                <input type="text" name="" placeholder="Digite o nome do projeto" id="search" className="p-4 w-full rounded-lg focus:outline-none"/>
            </div>

            </div>

            <div className="grid md:grid-cols-projects gap-y-16 gap-x-8">
                {Array.from({length: 20}).map((_,index)=> {
                    return(
                        <Card key={index}/>
                    )
                })}
            </div>
            </section>
        </main>
    
    
    )
}