'use client'
import { Element } from "react-scroll"
import { TabsNav } from "../Tabs"

export const Experience = () => {
    return(
        <Element name="experience" className="element bg-dark-10 ">
        <section data-aos="fade-up" className="container-personalizado py-24 ">
            <h1 className="text-3xl mb-6 font-preahvihear text-brand-color">Experiências</h1>
            <TabsNav defaultValue="stefanini"/>
        </section>
        </Element>
    )
}