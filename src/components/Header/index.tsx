'use client'

import { Link } from "react-scroll";
const links = [
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
    return (
        <nav className="flex items-center justify-between container shadow-md ">
            <h1 className="text-brand-color text-2xl font-preahvihear ">Victor Paranhos</h1>
            <menu>
                <ul className="flex items-center justify-center gap-14 text-dark-40 text-md">
                    {links.map((item) => {
                        return (
                            <li key={item.title} className="transition-colors cursor-pointer hover:text-brand-color"><Link activeClass="active" className={item.link} to={item.link} spy={true} smooth={true} duration={500}>{item.title}</Link></li>
                        )
                    })}
                </ul>

            </menu>
        </nav>
    )
}