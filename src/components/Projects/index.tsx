'use client'
import { Element } from "react-scroll"
import { Card } from "../Card"

export const Projects = () => {
    return(
        <Element name="projects" className="element shadow-2xl dark:shadow-none">
        <section className="container-personalizado py-32">
            <h1 className="text-3xl  dark:text-gray-dark-400 font-extrabold mb-6 text-blue-light-400">Projetos</h1>
            <div className="grid md:grid-cols-projects gap-y-16 gap-x-8">
            {Array.from({length: 6}).map((_,index)=> {
                    return <Card data-aos="flip-left" key={index}/>
                })
                    
                }
            </div>

        </section>
        </Element>
    )
}