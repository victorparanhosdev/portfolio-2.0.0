import React, { ComponentProps, Dispatch, ForwardedRef, forwardRef, ReactNode, SetStateAction, useEffect, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { links } from '../Header';
import { Link } from 'react-scroll';
import useMedia from 'use-media'
import { useTranslations } from "next-intl";
import * as PopoverNext from '@nextui-org/popover';
import * as Rounting from '@/i18n/routing'
import { motion } from 'framer-motion';

interface PopoverProps extends ComponentProps<'button'>{
    children: ReactNode;
    getOpen: Dispatch<SetStateAction<boolean>>;
  }
  

  export const PopoverMenu = forwardRef<HTMLButtonElement, PopoverProps>(
    ({ children, getOpen, ...props}, ref: ForwardedRef<HTMLButtonElement>) => {
      const [isOpen, setOpen] = useState(false);
      const isMedia = useMedia({minWidth: '768px'})
      const [activeSection, setActiveSection] = useState('home');
      const t = useTranslations("Header")
      function getBooleanOpen() {
        const newOpenState = !isOpen;
        setOpen(newOpenState);
        getOpen(newOpenState);
      }

      function getBooleanOpenHambuer() {
        const newOpenState = !isOpen;
        getOpen(newOpenState);
        
      }

      useEffect(()=> {
        if(isMedia){
          setOpen(false);
          getOpen(false);
        }

      },[isMedia])
  
      return (
        <Popover.Root open={isOpen} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button ref={ref} {...props} >
            {children}
          </button>
        </Popover.Trigger>
        <Popover.Portal>          
          <Popover.Content onPointerDownOutside={getBooleanOpenHambuer}
            className="PopoverContent bg-white rounded-bl-xl rounded-tl-xl backdrop-blur-xl shadow-xl dark:bg-gray-dark-100 data-[state=open]:animate-slideDownAndFade z-50"
            sideOffset={5}
          >
        <ul className="grid text-md ">
                    {links.map((item) => {
                          if (item.title === 'projects') {
                            return (
                                <PopoverNext.Popover key={item.title} placement="left" showArrow={true}>
                                    <Link
                                        className={`relative transition-colors cursor-pointer ${activeSection === item.link ? 'dark:text-gray-dark-400 text-blue-light-200' : 'dark:hover:text-gray-dark-400 hover:text-blue-light-200'}`}
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onSetActive={setActiveSection}
                                    >
                                        <PopoverNext.PopoverTrigger>
                                            <div className={` block relative transition-colors cursor-pointer py-2 px-4 text-lg aria-expanded:scale-[1] aria-expanded:opacity-100 ${activeSection === item.link ? 'dark:text-gray-dark-400 text-blue-light-200' : 'dark:hover:text-gray-dark-400 hover:text-blue-light-200'}`}>                        {t(item.title)}</div>


                                        </PopoverNext.PopoverTrigger>
                                      
                                    </Link>

                                    <PopoverNext.PopoverContent>
                                    <div className="px-1 py-2 grid gap-2">
                                                <Rounting.Link href="/projetos" className="text-base block dark:hover:text-gray-dark-400 hover:text-blue-light-200">{t('allprojects')}</Rounting.Link>
                                                <Link
                                                    className={`text-base transition-colors cursor-pointer ${activeSection === item.link ? 'dark:text-gray-dark-400 text-blue-light-200' : 'dark:hover:text-gray-dark-400 hover:text-blue-light-200'}`}
                                                    to={item.link}
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    onSetActive={setActiveSection}
                                                    onClick={(getBooleanOpen)}
                                                >
                                                    {t(item.title)}

                                                </Link>
                                            </div>
                                    </PopoverNext.PopoverContent>
                                </PopoverNext.Popover>
                            )
                        }
                        return (
                            <li key={item.title}><Link activeClass="active" className={`block relative transition-colors cursor-pointer py-2 px-4 text-lg ${activeSection === item.link ? 'dark:text-gray-dark-400 text-blue-light-200' : 'dark:hover:text-gray-dark-400 hover:text-blue-light-200'}`} onSetActive={setActiveSection} to={item.link} onClick={(getBooleanOpen)} spy={true} smooth={true} duration={500}>{t(item.title)}</Link></li>
                        )
                    })}
                </ul>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      );
    }
  );


