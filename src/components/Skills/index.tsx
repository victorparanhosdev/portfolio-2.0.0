'use client'
import { motion } from "framer-motion"
import { Element } from "react-scroll"
import { useInView } from 'react-intersection-observer'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, Mousewheel } from 'swiper/modules';
import { iconsSkills } from "../../../public/iconSkills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



export const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3
    });



    return (
        <Element name="skills" className="element">
            <section ref={ref} data-aos="fade-up" className="container-personalizado py-32">
                <h1 className="text-3xl mb-20  dark:text-gray-dark-400 font-extrabold text-blue-light-400">Habilidades</h1>
                <Swiper
                    className="overflow-hidden text-white "

                    modules={[Pagination, Autoplay, Mousewheel, Navigation, A11y]}
                    pagination={{ clickable: true, el: '.swiper-pagination', dynamicBullets: true }}
                    autoplay={{ delay: 2500 }}
                    mousewheel={{ invert: true }}
                    slidesPerView={'auto'}
                    spaceBetween={16}


                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{

                        300: {
                            slidesPerView: 2,

                        },

                        375: {
                            slidesPerView: 3,

                        },

                        480: {
                            slidesPerView: 4,

                        },

                        600: {
                            slidesPerView: 5,

                        },
                        768: {
                            slidesPerView: 6,

                        },

                        900: {
                            slidesPerView: 7,

                        },
                        1200: {
                            slidesPerView: 8,

                        },
                        1440: {
                            slidesPerView: 9,

                        },


                    }}
                >

                    {iconsSkills.map((item) => {

                        return (
                            <SwiperSlide key={item.tech}> <motion.li
                                animate={inView ? {
                                    scale: [1, 0.5, 0.5, 1, 1],
                                    rotate: [0, 0, 180, 180, 0],
                                } : {}}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],

                                }}

                                className="rounded-xl grid justify-center content-center dark:bg-gray-dark-200  min-h-[120px] dark:border-0 border bg-[#f0f6ff40] border-[#2c96df78] text-blue-light-100 dark:text-gray-dark-300 group text-center transition-colors group hover:shadow-xl dark:shadow-slate-900">
                                <h1 className="text-center mb-2 text-base md:text-lg font-bold text-[#1247a5] dark:text-[#8fbfd9] opacity-80 group-hover:opacity-100">{item.tech}</h1>
                                {item.imagem ? <FontAwesomeIcon className="text-6xl  text-center w-full text-[#1247a5] dark:text-[#8fbfd9] opacity-90 group-hover:opacity-100" icon={item.imagem} /> : <h1 className="text-[#1247a5] dark:text-[#8fbfd9] ">{item.tech}</h1>}
                            </motion.li>
                            </SwiperSlide>
                        )
                    })}
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>

            </section>
        </Element>
    )
} 