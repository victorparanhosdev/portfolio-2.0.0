
import { Element } from "react-scroll"
import { Card } from "../Card"
import { MdOutlineDoubleArrow } from "react-icons/md"
import Link from "next/link"
import ApiDataGithub from "../ApiRepos"
export const Projects = () => {
    
   // const dados = await ApiDataGithub()

    
    return(
        <Element name="projects" className="element">
        <section className="container-personalizado py-32 flex flex-col">
            <h1 className="text-3xl  dark:text-gray-dark-400 font-extrabold mb-6 text-blue-light-400">Projetos</h1>
            <div className="grid md:grid-cols-projects gap-y-16 gap-x-8">
            {Array.from({length: 6}).map((_,index)=> {
                    return <Card data-aos="flip-left" key={index}/>
                })
                    
                }
            </div>

            <Link href={"/projetos"} className="transition mt-6 ml-auto py-6 px-8 text-lg sm:text-xl font-bold dark:text-gray-dark-300 dark:hover:text-gray-dark-400 cursor-pointer flex gap-3 items-center hover:text-blue-light-200 text-blue-light-100"><MdOutlineDoubleArrow className="animate-arrowRight overflow-hidden text-current text-xl lg:text-base"/>Mais Projetos...</Link >

        </section>
        </Element>
    )
}