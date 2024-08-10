'use client'
import { Element} from "react-scroll"
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, XLogo } from "@phosphor-icons/react"

import FotoPerfil from '../../../public/PARANHOS.png'

export const Home = () => {
    return(
        <Element name="home" className="element dark:shadow-2xl">
        <section className="transition-all container-personalizado pt-32  w-full h-full">
            <div className="block md:grid grid-flow-col md:gap-10 items-center justify-stretch">

            <div className="min-w-[250px] max-w-[420px] h-[420px] md:max-w-[600px] -mt-12 m-auto md:m-0 flex md:grid justify-center md:after:hidden after:content-[''] after:block after:absolute after:bottom-0 relative dark:after:h-32 after:h-40 after:w-full dark:after:bg-linear-gray-3 after:bg-linear-light after:z-[1] md:h-full md:w-[400px]">
            <Image data-aos="flip-left" priority width={460} height={460} src={FotoPerfil.src} className=" order-1  inset-0 object-cover object-top w-full h-full" alt="Foto de Perfil" />

            </div>




          
            <div className="-mt-16 relative z-10 items-center flex w-full flex-col md:justify-items-startc text-center md:text-start md:place-items-baseline">
            <h1 data-aos="fade-left" className="text-2xl font-medium ">Olá, eu sou</h1>
            <p data-aos="fade-right"  className="text-blue-light-400 dark:text-gray-dark-400 text-4xl md:text-6xl mb-1 font-bold">Victor Paranhos</p>
            <div className="text-lg min-h-14 w-full mb-1">

            <Typewriter data-aos="fade-left"
            words={['Desenvolvedor FullStack', 'Graduado em Ánalise e Desenvolvimento de Sistemas']}
            loop={false}
            cursor={true}
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={20}
            delaySpeed={900}
        


          />
    

            </div>

            <ul data-aos="fade-right" className="w-full justify-center md:justify-start flex items-center gap-5 dark:text-blue-dark-100">
                    <li><a href=""><XLogo className="text-blue-light-200 hover:text-blue-light-400 dark:hover:opacity-70 hover:scale-110 transition  " size={28} /></a></li>
                    <li><a href=""><WhatsappLogo className="text-blue-light-200 hover:text-blue-light-400 dark:hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>
                    <li><a href=""><FacebookLogo className="text-blue-light-200 hover:text-blue-light-400 dark:hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>
                    <li><a href=""><GithubLogo className="text-blue-light-200 hover:text-blue-light-400 dark:hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>
                    <li><a href=""><InstagramLogo className="text-blue-light-200 hover:text-blue-light-400 dark:hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>
                    <li><a href=""><LinkedinLogo className="text-blue-light-200 hover:text-blue-light-400 dark:hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>

                </ul>
            </div>
 




            </div>

        </section>
   
        </Element>
    
    )
}