'use client'

import { Link } from "react-scroll";
import { Divide as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react";
import { PopoverMenu } from "../Popover";
import Logo from "../../../public/logo";
import { SwitchTheme } from "../Switch";
import { useTheme } from "next-themes";
export const links = [
    {
        title: "Inicio",
        link: "home",
    },
    {
        title: "Sobre mim",
        link: "about",
    },
    {
        title: "Experiências",
        link: "experience",
    },
    {
        title: "Projetos",
        link: "projects",
    },

];


export const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const [DarkOrLight, setDarkOrLight] = useState(false)
    const {setTheme, theme} = useTheme()



    useEffect(()=> {
        const ThemeLocalStorage = localStorage.getItem('theme')

        if(ThemeLocalStorage === 'dark'){
            setDarkOrLight(true)
        }
    },[])

    return (
        <header className="w-full fixed top-0 left-0 right-0 dark:bg-gray-dark-100 backdrop-blur-xl z-50 flex items-center min-h-[70px] shadow bg-gray-light-100">
        <nav className="flex items-center justify-between container-personalizado">
            <Logo className="h-12 w-12 fill-blue-light-200 dark:fill-gray-dark-400 dark:stroke-gray-dark-450"/>
            <menu className="flex items-center gap-2 md:gap-14">
                <PopoverMenu className=" order-2 md:hidden text-dark-light-100 hover:text-blue-light-200 dark:text-gray-dark-450 transition-all" getOpen={setOpen}><Hamburger size={28} toggled={isOpen} toggle={setOpen} /></PopoverMenu>

                <ul className="hidden md:flex items-center justify-center gap-14 text-md">
                    {links.map((item) => {
                        return (
                            <li key={item.title} className="transition-colors cursor-pointer dark:hover:text-gray-dark-400 hover:text-blue-light-200"><Link activeClass="active" className={item.link} to={item.link} spy={true} smooth={true} duration={500}>{item.title}</Link></li>
                        )
                    })}
                </ul>
                <div className="order-1 md:mr-6 flex items-center">
                <SwitchTheme checked={DarkOrLight} onCheckedChange={setDarkOrLight} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
                </div>
            </menu>
        </nav>
        </header>
    )
}