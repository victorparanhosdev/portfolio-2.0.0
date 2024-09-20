import { Element} from "react-scroll"
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react"
import {useTranslations} from 'next-intl';
import FotoPerfil from '../../../public/PARANHOS.png'
import FotoPerfil2 from '../../../public/PARANHOS2.png'


export const Home = ()  => {
    
    const t = useTranslations('HomePage');
    console.log(t('title'))

    return(
        <Element name="home" className="element">
        <section className="transition-all container-personalizado pt-32 md:pt-20  w-full h-full">
            <div className="block md:grid grid-flow-col md:gap-10 items-center justify-stretch">

            <div className="max-w-[420px] h-[420px] -mt-12 m-auto md:mt-0 flex md:grid justify-center md:after:hidden after:content-[''] after:block after:absolute after:bottom-0 relative dark:after:h-32 after:h-96 after:w-full dark:after:bg-linear-gray-3 after:bg-linear-light after:z-[1]  md:w-[400px]">
            <Image data-aos="flip-left" priority width={460} height={460} src={FotoPerfil.src} className="hidden dark:block order-1 object-cover object-top md:object-bottom w-full h-full" alt="Foto de Perfil" />
            <Image data-aos="flip-left" priority width={460} height={460} src={FotoPerfil2.src} className="block dark:hidden order-1 object-cover object-top w-full h-full md:max-w-80" alt="Foto de Perfil" />

            </div>




          
            <div className="-mt-16 md:mt-0 relative z-10 items-center flex w-full flex-col md:justify-items-startc text-center md:text-start md:place-items-baseline">
            <h1 data-aos="fade-left" className="text-2xl font-medium ">Olá, eu sou</h1>
            <p data-aos="fade-right"  className="text-blue-light-400 dark:text-gray-dark-400 text-4xl md:text-6xl mb-1 font-bold">Victor Paranhos</p>
            <div className="text-lg min-h-14 w-full mb-1 max-w-[415px]">

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
                    
                    <li><a target="_blank" href="https://api.whatsapp.com/send?phone=5575991258651&text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."><WhatsappLogo className="dark:text-blue-dark-100 dark:hover:opacity-100 dark:opacity-80 text-blue-light-200 hover:opacity-80  hover:scale-110 transition " size={28} /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/victorparanhos94/"><LinkedinLogo className="dark:text-blue-dark-100 dark:hover:opacity-100 dark:opacity-80 text-blue-light-200 hover:opacity-80  hover:scale-110 transition " size={28} /></a></li>
                    <li><a target="_blank" href="https://github.com/victorparanhosdev"><GithubLogo className="dark:text-blue-dark-100 dark:hover:opacity-100 dark:opacity-80 text-blue-light-200 hover:opacity-80  hover:scale-110 transition " size={28} /></a></li>
                    <li><a target="_blank"  href="https://www.instagram.com/victorparanhos_94/"><InstagramLogo className="dark:text-blue-dark-100 dark:hover:opacity-100 dark:opacity-80 text-blue-light-200 hover:opacity-80  hover:scale-110 transition " size={28} /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/VictorParanhosCosta/"><FacebookLogo className="dark:text-blue-dark-100 dark:hover:opacity-100 dark:opacity-80 text-blue-light-200 hover:opacity-80  hover:scale-110 transition " size={28} /></a></li>

                </ul>
            </div>
 




            </div>

        </section>
   
        </Element>
    
    )
}