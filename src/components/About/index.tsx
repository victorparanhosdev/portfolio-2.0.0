'use client'

import { Element } from "react-scroll"
import { Button } from "../Button"
import { DownloadSimple, MapPin} from "@phosphor-icons/react"


export const About = () => {
    return (
        <Element name="about" className="element dark:bg-linear-gray shadow-2xl dark:shadow-none">
            <section data-aos="fade-up" className="container-personalizado py-32 ">
                <h1 className="text-3xl dark:text-gray-dark-400 mb-5 font-extrabold text-blue-light-400">Sobre mim</h1>
                <div className="mb-6 flex align-baseline gap-4">
                <MapPin size={24} weight="fill" className="dark:text-blue-dark-100 text-blue-light-200" />
                <h2 className="text-lg font-medium ">Cruz das Almas, BA </h2>

                </div>

                
                <p className="text-base md:text-lg text-justify ">Olá! Sou Victor Paranhos, um Desenvolvedor FullStack, apaixonado por tecnologia e Graduado em Análise e Desenvolvimento de Sistemas na UNINTER. Aperfeiçoou meus conhecimentos por meio dos cursos da Rocketseat, onde ja tenho experiência com JavaScript, Reacjs, Nextjs, Tailwind, TypeScript, Nodejs, Java, SQL, HTML e CSS. Além disso tenho experiência de 10 anos atuando como técnico de informática na Dires, Estagiei também durante 5 meses como suporte técnico na empresa Vtrina e atualmente trabalho como Desenvolvedor jr na Stefanini.</p>
                
                <Button iconLeft={DownloadSimple} state="primary" className="mt-12">Baixar currículo</Button>

            </section>

        </Element>

    )

}