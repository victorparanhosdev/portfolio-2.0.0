'use client'
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { Element } from "react-scroll"
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react"

export const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2 
    });

  

    return(
        <Element name="skills" className="element">
        <section ref={ref} data-aos="fade-up" className="container-personalizado pb-10 pt-32">
            <h1 className="text-3xl mb-12  dark:text-gray-dark-400 font-extrabold text-blue-light-400">Habilidades</h1>
            <ul className="grid grid-cols-skills gap-4 overflow-hidden text-white ">
            {Array.from({length: 8}).map((_,index)=> {
                return(
                    <motion.li
                    animate={inView ? {
                        scale: [1, 0.5, 0.5, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                    } : {}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],

                    }}
                      
                      key={index} className="rounded-xl flex items-center justify-center dark:bg-gray-dark-200 min-h-[100px] max-h-[120px] bg-blue-light-200">
                            <h1>OLa</h1>
                    </motion.li>
                )
            })}
            
            </ul>
        
        </section>
        </Element>
    )
} 