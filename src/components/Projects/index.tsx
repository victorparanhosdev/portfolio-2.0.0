'use client'
import { Element } from "react-scroll"
import { Card } from "../Card"

export const Projects = () => {
    return(
        <Element name="projects" className="element">
        <section data-aos="fade-up" className="container py-24">
            <h1 className="text-3xl font-preahvihear text-brand-color mb-6">Projetos</h1>
            <div className="grid grid-cols-projects gap-y-16 gap-x-8">
            {Array.from({length: 4}).map((_,index)=> {
                    return <Card data-aos="fade-up" key={index}/>
                })
                    
                }
            </div>

        </section>
        </Element>
    )
}