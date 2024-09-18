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


                <p className="text-base md:text-lg text-justify ">
                Sou <strong className="font-extrabold">Victor Paranhos</strong>, formado em Análise e Desenvolvimento de Sistemas pela UNINTER, com uma paixão por tecnologia e inovação. Tenho <strong className="font-extrabold">conhecimento sólido em desenvolvimento front-end e back-end</strong>, trabalhando com JavaScript, React.js, Next.js, TypeScript, Node.js, Python, Java, SQL, HTML e CSS, adquiridos por meio de cursos e estudos contínuos. Atualmente, sou <strong className="font-extrabold">Desenvolvedor Jr.</strong> na Stefanini, e conto com <strong className="font-extrabold">10 anos de experiência</strong> como técnico de informática na Dires, além de um estágio em suporte técnico na Vtrina. Estou sempre em busca de novos desafios e aprendizado, e gosto de colaborar em projetos que trazem impacto real. <br /><br /> Quer bater um papo? Fique à vontade para entrar em contato: <a className="hover:underline text-blue-light-200 dark:text-blue-dark-100" href="mailto:victor_paranhos@hotmail.com">victor_paranhos@hotmail.com</a> 
                </p>
            

                <a href="/curriculo.pdf" download="VictorParanhos(Curriculo).pdf" ><Button iconLeft={DownloadSimple} state="primary" className="mt-12">Baixar currículo</Button></a>

            </section>

        </Element>

    )

}