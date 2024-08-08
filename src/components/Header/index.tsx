'use client'

import { Link } from "react-scroll";
import DialogMenu from "../Dialog";
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { PopoverMenu } from "../Popover";
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

    return (
        <header className="w-full fixed top-0 left-0 right-0 z-10 border-b-2 border-dark-30 bg-dark-10 shadow-2xl flex items-center h-[70px]">
        <nav className="flex items-center justify-between container-personalizado">
            <h1 className="text-brand-color text-2xl font-preahvihear ">VP</h1>
            <menu className="flex items-center">
                <PopoverMenu className="md:hidden text-brand-color hover:text-brand-hover transition-all" getOpen={setOpen}><Hamburger size={32} toggled={isOpen} toggle={setOpen} /></PopoverMenu>

                <ul className="hidden md:flex items-center justify-center gap-14 text-dark-40 text-md">
                    {links.map((item) => {
                        return (
                            <li key={item.title} className="transition-colors cursor-pointer hover:text-brand-color"><Link activeClass="active" className={item.link} to={item.link} spy={true} smooth={true} duration={500}>{item.title}</Link></li>
                        )
                    })}
                </ul>
            </menu>
        </nav>
        </header>
    )
}