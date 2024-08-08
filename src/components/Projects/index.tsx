'use client'
import { Element } from "react-scroll"
import { Card } from "../Card"

export const Projects = () => {
    return(
        <Element name="projects" className="element">
        <section className="container-personalizado py-32">
            <h1 className="text-3xl font-preahvihear text-brand-color mb-6">Projetos</h1>
            <div className="grid md:grid-cols-projects gap-y-16 gap-x-8">
            {Array.from({length: 4}).map((_,index)=> {
                    return <Card data-aos="flip-left" key={index}/>
                })
                    
                }
            </div>

        </section>
        </Element>
    )
}