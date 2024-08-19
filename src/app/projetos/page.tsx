import { Card } from "@/components/Card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";


export default async  function Projetos(){

    await new Promise(resolve => setTimeout(resolve, 5000))
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="py-32 container-personalizado">

            <div className="flex gap-2">
            <Link href={"/"} className="p-5 bg-slate-50 text-black flex items-center gap-3"><FaArrowLeft /> Voltar</Link>
            <div>
                <label htmlFor="search" className="mb-2 block">Buscar por nome:</label>
                <input type="text" name="" placeholder="Digite o nome do projeto" id="search" className="p-4"/>
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