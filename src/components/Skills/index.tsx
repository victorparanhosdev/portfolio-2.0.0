'use client'

import { Element } from "react-scroll"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, Mousewheel, EffectCoverflow } from 'swiper/modules';
import { iconsSkills } from "../../../public/iconSkills";
import useMedia from 'use-media'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import './stylesSwiper.css'


export const Skills = () => {
    const isMedia = useMedia({ minWidth: '835px' })

    return (
        <Element name="skills" className="element">
            <section data-aos="fade-up" className="container-personalizado py-32">
                <h1 className="text-3xl mb-6  dark:text-gray-dark-400 font-extrabold text-blue-light-400">Habilidades</h1>
                <div className="flex gap-2 items-center mb-10">
                    <h1 className="text-justify">Aqui você encontra minhas principais habilidades na qual tenho maior conhecimento e experiência. No entanto, estou sempre em busca de novos aprendizados constantemente, me atualizando e explorando novas tecnologias.</h1>
                </div>
                {!isMedia ?
                    <Swiper
                        className="text-white mySwiper min-h-[160px] "
                        modules={[Pagination, Autoplay, Mousewheel, Navigation, A11y, EffectCoverflow]}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        effect={'coverflow'}
                        autoplay={{ delay: 1200 }}
                        mousewheel={{ invert: true }}
                        grabCursor={true}
                        centeredSlides={true}
                        loop
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,

                            },
                            300: {
                                slidesPerView: 1.6,

                            },

                            380: {
                                slidesPerView: 2.5,

                            },
                            600: {
                                slidesPerView: 2.9
                            }

                        }}
                    >

                        {
                            iconsSkills.map((item) => {
                                const Icon = item.imagem
                                return (
                                    <SwiperSlide key={item.tech}> <li
                                        className="rounded-xl grid justify-center justify-items-center content-center dark:bg-gray-dark-200  min-h-[120px] min-w-[120px] dark:border-0 border bg-[#f0f6ff80] border-[#2c96df78] text-blue-light-100 dark:text-gray-dark-300 group text-center transition-colors group ">
                                        <h1 className="text-center mb-2 font-bold text-[#1247a5] dark:text-[#8fbfd9] opacity-80 group-hover:opacity-100">{item.tech}</h1>
                                        <Icon className="text-6xl text-center w-full text-[#1247a5] dark:text-[#8fbfd9] opacity-90 group-hover:opacity-100" />
                                    </li>
                                    </SwiperSlide>
                                )
                            })}
                    </Swiper> :
                    <ul className="grid gap-4 grid-cols-skills">
                        {
                            iconsSkills.map((item, index) => {
                                const Icon = item.imagem
                                const formattedString = index > 9 ? `${index}00` : `${index}00`;
     
                                return (
                                    <li data-aos="flip-up" data-aos-duration={formattedString} key={item.tech}
                                        className=" rounded-xl grid justify-items-center justify-center content-center dark:bg-gray-dark-200  min-h-[120px] dark:border-0 border bg-[#f0f6ff80] border-[#2c96df78] text-blue-light-100 dark:text-gray-dark-300 group text-center transition-colors group ">
                                        <h1 className="text-center mb-2 font-bold text-[#1247a5] dark:text-[#8fbfd9] opacity-80 group-hover:opacity-100">{item.tech}</h1>
                                        <Icon className="text-5xl text-center w-full text-[#1247a5] dark:text-[#8fbfd9] opacity-90 group-hover:opacity-100" />
                                    </li>

                                )
                            })}

                    </ul>}


            </section>
        </Element>
    )
} 