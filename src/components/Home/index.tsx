'use client'
import { Element} from "react-scroll"
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, XLogo } from "@phosphor-icons/react"

export const Home = () => {
    return(
        <Element name="home" className="element">
        <section className="transition-all container-personalizado py-32 relative">
            <div className="w-full flex flex-col md:flex-row gap-4 place-items-center items-center md:justify-between justify-center">
            
            <div className="grid order-2 md:justify-items-startc place-items-center text-center md:text-start md:place-items-baseline">
            <h1 data-aos="fade-left" className="text-2xl font-medium mb-2">Olá, eu sou</h1>
            <p data-aos="fade-right"  className="dark:text-victor-400 text-3xl md:text-6xl font-preahvihear mb-4">Victor Paranhos</p>
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
            <ul data-aos="fade-right" className="mt-6 flex items-center gap-5 ">
                    <li><a href=""><XLogo className="hover:scale-110 transition dark:text-victor-600 " size={28} /></a></li>
                    <li><a href=""><WhatsappLogo className="hover:scale-110 transition dark:text-victor-600" size={28} /></a></li>
                    <li><a href=""><FacebookLogo className="hover:scale-110 transition dark:text-victor-600" size={28} /></a></li>
                    <li><a href=""><GithubLogo className="hover:scale-110 transition dark:text-victor-600" size={28} /></a></li>
                    <li><a href=""><InstagramLogo className="hover:scale-110 transition dark:text-victor-600" size={28} /></a></li>
                    <li><a href=""><LinkedinLogo className="hover:scale-110 transition dark:text-victor-600" size={28} /></a></li>

                </ul>

          
            </div>

        
            <Image data-aos="flip-left" priority width={460} height={460} src="http://github.com/victorparanhosdev.png" className=" shadow-brand-shadow dark:shadow-victor-600 inset-0 rounded-full order-1 md:order-2 max-[768px]:w-[200px] max-w-[300px] object-cover sm:mx-12" alt="Foto de Perfil" />



            </div>

        </section>
   
        </Element>
    
    )
}