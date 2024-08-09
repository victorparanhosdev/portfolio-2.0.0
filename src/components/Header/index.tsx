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
    })

    return (
        <header className="w-full fixed top-0 left-0 right-0 dark:bg-victor-200 backdrop-blur-3xl z-10 flex items-center h-[70px] shadow">
        <nav className="flex items-center justify-between container-personalizado">
            <Logo className="h-12 w-12 dark:fill-victor-400 stroke-dark-30 hover:fill-brand-hover"/>
            <menu className="flex items-center gap-4 md:gap-28">
                <PopoverMenu className=" order-2 md:hidden dark:text-victor-500 transition-all" getOpen={setOpen}><Hamburger size={24} toggled={isOpen} toggle={setOpen} /></PopoverMenu>

                <ul className="hidden md:flex items-center justify-center gap-14 text-md">
                    {links.map((item) => {
                        return (
                            <li key={item.title} className="transition-colors cursor-pointer dar:hover:text-victor-400"><Link activeClass="active" className={item.link} to={item.link} spy={true} smooth={true} duration={500}>{item.title}</Link></li>
                        )
                    })}
                </ul>
                <div className="order-1 mr-4 md:mr-8 flex items-center">
                <SwitchTheme checked={DarkOrLight} onCheckedChange={setDarkOrLight} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
                </div>
            </menu>
        </nav>
        </header>
    )
}