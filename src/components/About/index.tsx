'use client'

import { Element } from "react-scroll"
import { Button } from "../Button"
import { MapPinSimpleArea } from "@phosphor-icons/react"


export const About = () => {
    return (
        <Element name="about" className="element">
            <section data-aos="fade-up" className="container py-24">
                <h1 className="text-3xl font-preahvihear text-brand-color mb-5">Sobre mim</h1>
                <div className="mb-6 flex items-center gap-4">
                <h2 className="text-lg font-medium ">Cruz das Almas, BA </h2>
                <MapPinSimpleArea size={24} />

                </div>

                
                <p className="text-base text-justify">Olá! Sou Victor Paranhos, um Desenvolvedor FullStack, apaixonado por tecnologia e Graduado em Análise e Desenvolvimento de Sistemas na UNINTER. Aperfeiçoou meus conhecimentos por meio dos cursos da Rocketseat, onde ja tenho experiência com JavaScript, Reacjs, Nextjs, Tailwind, TypeScript, Nodejs, Java, SQL, HTML e CSS. Além disso tenho experiência de 10 anos atuando como técnico de informática na Dires, Estagiei também durante 5 meses como suporte técnico na empresa Vtrina e atualmente trabalho como Desenvolvedor jr na Stefanini.</p>
                
                <Button state="primary" className="mt-12">Baixar currículo</Button>

            </section>

        </Element>

    )

}