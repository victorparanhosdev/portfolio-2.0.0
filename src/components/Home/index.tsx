'use client'
import { Element, Link } from "react-scroll"
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter'
import { CaretDoubleDown, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, XLogo } from "@phosphor-icons/react"

export const Home = () => {
    return(
        <Element name="home" className="element bg-dark-10 gap-2 grid">
        <section className=" transition-all container sm:py-24 relative">
            <div data-aos="fade-up"  className="flex items-center justify-between">

            <div className="grid justify-items-start">
            <h1 className="text-2xl font-medium mb-2">Olá, eu sou</h1>
            <p className="text-brand-color text-6xl font-preahvihear mb-4">Victor Paranhos</p>
            <div className="text-lg">

            <Typewriter
            words={['Desenvolvedor FullStack', 'Graduado em Ánalise e Desenvolvimento de Sistemas']}
            loop={false}
            cursor={true}
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={20}
            delaySpeed={900}


          />
          
          
            </div>
            <ul className="mt-5 flex items-center gap-5 ">
                    <li><a href=""><XLogo className="hover:scale-110 transition text-brand-color hover:text-brand-hover " size={24} /></a></li>
                    <li><a href=""><WhatsappLogo className="hover:scale-110 transition text-brand-color hover:text-brand-hover" size={24} /></a></li>
                    <li><a href=""><FacebookLogo className="hover:scale-110 transition text-brand-color hover:text-brand-hover" size={24} /></a></li>
                    <li><a href=""><GithubLogo className="hover:scale-110 transition text-brand-color hover:text-brand-hover" size={24} /></a></li>
                    <li><a href=""><InstagramLogo className="hover:scale-110 transition text-brand-color hover:text-brand-hover" size={24} /></a></li>
                    <li><a href=""><LinkedinLogo className="hover:scale-110 transition text-brand-color hover:text-brand-hover" size={24} /></a></li>

                </ul>

          
            </div>
            <div className="relative h-80 w-80 flex items-center mr-20 before:content-[''] before:absolute before:block before:shadow-brand-shadow before:shadow-brand-color before:inset-0 before:rounded-full before:blur-2xl">
            <Image priority width={460} height={460} src="http://github.com/victorparanhosdev.png" className="rounded-full  w-full object-cover" alt="Foto de Perfil" />
            
            </div>


            </div>
            <Link activeClass="active" className="about cursor-pointer sm:hidden flex justify-center" to="about" spy={true} smooth={true} duration={500}><CaretDoubleDown className="text-brand-color animate-bounce overflow-hidden" size={32} /></Link> 

        </section>
   
        </Element>
    
    )
}