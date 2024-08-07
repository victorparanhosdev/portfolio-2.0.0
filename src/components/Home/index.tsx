'use client'
import { Element} from "react-scroll"
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, XLogo } from "@phosphor-icons/react"

export const Home = () => {
    return(
        <Element name="home" className="element bg-dark-10 gap-2 grid">
        <section className="transition-all container-personalizado pt-[88px] pb-10 md:py-24 relative">
            <div data-aos="fade-up" className="w-full min-h-homescreen md:min-h-max flex flex-col md:flex-row gap-4 place-items-center items-center md:justify-between justify-center">

            <div className="grid order-2 md:justify-items-startc place-items-center text-center md:text-start md:place-items-baseline">
            <h1 className="text-2xl font-medium mb-2">Olá, eu sou</h1>
            <p className="text-brand-color text-3xl md:text-6xl font-preahvihear mb-4">Victor Paranhos</p>
            <div className="text-lg min-h-14">

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

            <div className="order-1 md:order-2 relative w-48 md:h-80 md:w-80 flex items-center md:mr-20 before:content-['']  before:absolute before:block before:shadow-brand-shadow before:shadow-brand-color before:inset-0 before:rounded-full before:blur-2xl">
            <Image priority width={460} height={460} src="http://github.com/victorparanhosdev.png" className="rounded-full w-full object-cover" alt="Foto de Perfil" />
            
            </div>


            </div>

        </section>
   
        </Element>
    
    )
}