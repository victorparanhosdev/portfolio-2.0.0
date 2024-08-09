'use client'
import { Element } from "react-scroll"
import { TabsNav } from "../Tabs"

export const Experience = () => {
    return(
        <Element name="experience" className="element">
        <section className="container-personalizado py-32">
            <h1 className="text-3xl mb-6 font-preahvihear dark:text-victor-400 ">Experiências</h1>
            <TabsNav data-aos="fade-up" defaultValue="stefanini"/>
        </section>
        </Element>
    )
}