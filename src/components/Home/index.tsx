'use client'
import { Element} from "react-scroll"
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, XLogo } from "@phosphor-icons/react"

import FotoPerfil from '../../../public/PARANHOS.png'

export const Home = () => {
    return(
        <Element name="home" className="element shadow-2xl">
        <section className="transition-all container-personalizado py-32 w-full">
            <div className="block md:flex md:gap-16 items-center">

            <div className="min-w-[250px] max-w-[420px] h-[420px] sm:max-w-[600px] sm:h-[500px] -mt-[66px] m-auto md:m-0 flex md:grid justify-center mb-2">
            <Image data-aos="flip-left" priority width={460} height={460} src={FotoPerfil.src} className=" order-1  inset-0 object-cover object-top w-full h-full" alt="Foto de Perfil" />

            </div>


            
            <div className="flex w-full flex-col md:justify-items-startc place-items-center text-center md:text-start md:place-items-baseline">
            <h1 data-aos="fade-left" className="text-2xl font-medium ">Olá, eu sou</h1>
            <p data-aos="fade-right"  className="dark:text-gray-dark-400 text-4xl md:text-6xl mb-1 font-semibold">Victor Paranhos</p>
            <div className="text-lg min-h-14">

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
            <ul data-aos="fade-right" className="flex items-center gap-5 dark:text-blue-dark-100">
                    <li><a href=""><XLogo className="hover:opacity-70 hover:scale-110 transition  " size={28} /></a></li>
                    <li><a href=""><WhatsappLogo className="hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>
                    <li><a href=""><FacebookLogo className="hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>
                    <li><a href=""><GithubLogo className="hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>
                    <li><a href=""><InstagramLogo className="hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>
                    <li><a href=""><LinkedinLogo className="hover:opacity-70 hover:scale-110 transition " size={28} /></a></li>

                </ul>

          
            </div>
 




            </div>

        </section>
   
        </Element>
    
    )
}