import { Element } from "react-scroll"
import { Button } from "../Button"
import { DownloadSimple, MapPin } from "@phosphor-icons/react"


export const About = () => {
    return (
        <Element name="about" className="element dark:bg-linear-gray">
            <section data-aos="fade-up" className="container-personalizado py-32 ">
                <h1 className="text-3xl dark:text-gray-dark-400 mb-5 font-extrabold text-blue-light-400">Sobre mim</h1>
                <div className="mb-6 flex align-baseline gap-4">
                    <MapPin size={24} weight="fill" className="dark:text-blue-dark-100 text-blue-light-200" />
                    <h2 className="text-lg font-medium ">Cruz das Almas, BA </h2>

                </div>


                <p className="text-base md:text-lg text-justify">
                    Olá, sou Victor Paranhos, formado em Análise e Desenvolvimento de Sistemas pela UNINTER e apaixonado por tecnologia. Tenho me aprofundado em diversas tecnologias através dos cursos de programação, onde já acumulo experiências em JavaScript, React.js, Next.js, Tailwind, TypeScript, Node.js, Python, Java, SQL, HTML e CSS.
                </p>
                <br />

                <p className="text-base md:text-lg text-justify">
                    Atualmente, atuo como Desenvolvedor Jr. na Stefanini, mas minha trajetória inclui 10 anos de experiência como técnico de informática na Dires e um estágio de 6 meses como suporte técnico na empresa Vtrina. Essas experiências têm sido fundamentais para meu crescimento e aprendizado constante.
                </p>
                <br />

                <p className="text-base md:text-lg text-justify">
                    Sempre busco novos desafios para ampliar meus conhecimentos e criar soluções práticas e eficientes. Algumas das minhas principais características incluem: proatividade, organização, responsabilidade, trabalho em equipe, e uma grande capacidade de aprendizado contínuo.
                </p>
                <br />

                <p className="text-base md:text-lg text-justify">
                    Tem algo que você gostaria de saber ou discutir? Entre em contato comigo por email: <a className="hover:underline text-blue-light-200 dark:text-blue-dark-100" href="mailto:victor_paranhos@hotmail.com">victor_paranhos@hotmail.com</a> e vamos conversar!
                </p>


                <a href="/curriculo.pdf" download="VictorParanhos(Curriculo).pdf" ><Button iconLeft={DownloadSimple} state="primary" className="mt-12">Baixar currículo</Button></a>

            </section>

        </Element>

    )

}