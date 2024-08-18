'use client'

import { Element } from "react-scroll"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, Mousewheel, EffectCoverflow, EffectCards } from 'swiper/modules';
import { iconsSkills } from "../../../public/iconSkills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import media from 'use-media'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import './stylesSwiper.css'

export const Skills = () => {
    const isMedia = media({ minWidth: '500px' })

    return (
        <Element name="skills" className="element">
            <section data-aos="fade-up" className="container-personalizado py-32">
                <h1 className="text-3xl mb-20  dark:text-gray-dark-400 font-extrabold text-blue-light-400">Habilidades</h1>
                {!isMedia ? 
                <Swiper
                    className="text-white mySwiper min-h-[150px] "
                    modules={[Pagination, Autoplay, Mousewheel, Navigation, A11y, EffectCoverflow]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    effect={'coverflow'}
                    autoplay={{ delay: 1400 }}
                    mousewheel={{ invert: true }}
                    grabCursor={true}
                    centeredSlides={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.5,

                        },
                        300: {
                            slidesPerView: 1.6,

                        },

                        380: {
                            slidesPerView: 2.9,

                        },

                    }}
                >

                    {
                        iconsSkills.map((item) => {

                            return (
                                <SwiperSlide key={item.tech}> <li
                                    className="rounded-xl grid justify-center content-center dark:bg-gray-dark-200  h-[120px] min-w-[120px] dark:border-0 border bg-[#f0f6ff80] border-[#2c96df78] text-blue-light-100 dark:text-gray-dark-300 group text-center transition-colors group ">
                                    <h1 className="text-center mb-2 text-base md:text-lg font-bold text-[#1247a5] dark:text-[#8fbfd9] opacity-80 group-hover:opacity-100">{item.tech}</h1>
                                    {item.imagem ? <FontAwesomeIcon className="text-6xl text-center w-full text-[#1247a5] dark:text-[#8fbfd9] opacity-90 group-hover:opacity-100" icon={item.imagem} /> : <h1 className="text-[#1247a5] dark:text-[#8fbfd9] ">{item.tech}</h1>}
                                </li>
                                </SwiperSlide>
                            )
                        })}
                </Swiper> : 
                 <ul className="grid gap-4 grid-cols-skills">
                        {
                            iconsSkills.map((item) => {
                                return (
                                   <li key={item.tech}
                                        className=" rounded-xl grid justify-center content-center dark:bg-gray-dark-200  min-h-[120px] dark:border-0 border bg-[#f0f6ff80] border-[#2c96df78] text-blue-light-100 dark:text-gray-dark-300 group text-center transition-colors group ">
                                        <h1 className="text-center mb-2 text-base md:text-lg font-bold text-[#1247a5] dark:text-[#8fbfd9] opacity-80 group-hover:opacity-100">{item.tech}</h1>
                                        {item.imagem ? <FontAwesomeIcon className="text-6xl text-center w-full text-[#1247a5] dark:text-[#8fbfd9] opacity-90 group-hover:opacity-100" icon={item.imagem} /> : <h1 className="text-[#1247a5] dark:text-[#8fbfd9] ">{item.tech}</h1>}
                                    </li>

                                )
                            })}

                 </ul> }
                
            </section>
        </Element>
    )
} 