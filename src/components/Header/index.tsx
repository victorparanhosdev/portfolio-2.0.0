import { Link } from "react-scroll";
import { Divide as Hamburger } from 'hamburger-react';
import { useEffect, useState } from "react";
import { PopoverMenu } from "../Popover";
import Logo from "../../../public/logo";
import { SwitchTheme } from "../Switch";
import { useTheme } from "next-themes";
import { motion } from 'framer-motion';
import { useTranslations } from "next-intl";
import { ButtonTranslate } from "../ButtonTranslate";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import * as Rounting from '@/i18n/routing'
import useMedia from "use-media";

export const links = [
    { title: "home", link: "home" },
    { title: "about", link: "about" },
    { title: "experience", link: "experience" },
    { title: "skills", link: "skills" },
    { title: "projects", link: "projects" },
];

export const Header = () => {
    const isMedia = useMedia({minWidth: '768px'})
    const t = useTranslations('Header');
    const [isOpen, setOpen] = useState(false);
    const [darkOrLight, setDarkOrLight] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const { setTheme, theme } = useTheme();
    const [isOpenPopover, setOpenPopover] = useState(false);

    useEffect(() => {
        const themeLocalStorage = localStorage.getItem('theme');
        setDarkOrLight(themeLocalStorage !== 'light');
    }, []);


    return (
        <header className="w-full fixed top-0 left-0 right-0 dark:bg-gray-dark-100 backdrop-blur-xl z-50 flex items-center min-h-[70px] shadow bg-gray-light-100">
            <nav className="flex items-center justify-between container-personalizado">
                <Logo className="h-12 w-12 fill-blue-light-200 dark:fill-gray-dark-400 dark:stroke-gray-dark-450" />
                <menu className="flex items-center gap-2 md:gap-8 min-[800px]:gap-10 min-[900px]:gap-14">
                    <PopoverMenu className="order-2 md:hidden text-dark-light-100 hover:text-blue-light-200 dark:text-gray-dark-450 transition-all" getOpen={setOpen}>
                        <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
                    </PopoverMenu>

                    <ul className="hidden md:flex items-center justify-center gap-8 min-[800px]:gap-10 min-[900px]:gap-14 text-md">
                        {links.map(item => {

                            if (item.title === 'projects') {
                                return (
                                    <Popover key={item.title} placement="bottom" showArrow={true} isOpen={isOpenPopover} onOpenChange={setOpenPopover}>
                                        <Link
                                            className={`relative transition-colors cursor-pointer ${activeSection === item.link ? 'dark:text-gray-dark-400 text-blue-light-200' : 'dark:hover:text-gray-dark-400 hover:text-blue-light-200'}`}
                                            to={item.link}
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            onSetActive={setActiveSection}
                                        >
                                            <PopoverTrigger>
                                                <div className={` aria-expanded:scale-[1] aria-expanded:opacity-100 ${activeSection === item.link ? 'dark:text-gray-dark-400 text-blue-light-200' : 'dark:hover:text-gray-dark-400 hover:text-blue-light-200'}`}>                        {t(item.title)}</div>


                                            </PopoverTrigger>
                                            {activeSection === item.link && (
                                                <motion.div
                                                    layoutId="activeTab2"
                                                    transition={{ duration: 0.5, delay: 0 }}
                                                    className="absolute -bottom-6 right-0 left-0 w-full h-0.5 dark:bg-gray-dark-400 bg-blue-light-200"
                                                />
                                            )}
                                        </Link>

                                        <PopoverContent >
                                            <div className="px-1 py-2 grid gap-2">
                                                <Rounting.Link href="/projetos" className="text-base block dark:hover:text-gray-dark-400 hover:text-blue-light-200">{t('allprojects')}</Rounting.Link>
                                                <Link
                                                    className={`text-base  transition-colors cursor-pointer ${activeSection === item.link ? 'dark:text-gray-dark-400 text-blue-light-200' : 'dark:hover:text-gray-dark-400 hover:text-blue-light-200'}`}
                                                    to={item.link}
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    onSetActive={setActiveSection}
                                                >
                                                    {t(item.title)}

                                                </Link>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                )
                            }
                            return (
                                <li key={item.title}>
                                    <Link
                                        className={`relative transition-colors cursor-pointer ${activeSection === item.link ? 'dark:text-gray-dark-400 text-blue-light-200' : 'dark:hover:text-gray-dark-400 hover:text-blue-light-200'}`}
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onSetActive={setActiveSection}
                                    >
                                        {t(item.title)}
                                        {activeSection === item.link && (
                                            <motion.div
                                                layoutId="activeTab2"
                                                transition={{ duration: 0.5, delay: 0 }}
                                                className="absolute -bottom-6 right-0 left-0 w-full h-0.5 dark:bg-gray-dark-400 bg-blue-light-200"
                                            />
                                        )}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="order-1 md:mr-6 flex items-center gap-3">

                        <ButtonTranslate />

                        <SwitchTheme
                            checked={darkOrLight}
                            onCheckedChange={setDarkOrLight}
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        />
                    </div>
                </menu>
            </nav>
        </header>
    );
};
