import React, { ComponentProps, Dispatch, ForwardedRef, forwardRef, ReactNode, SetStateAction, useEffect, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { links } from '../Header';
import { Link } from 'react-scroll';
import useMedia from 'use-media'
import {motion} from 'framer-motion'

interface PopoverProps extends ComponentProps<'button'>{
    children: ReactNode;
    getOpen: Dispatch<SetStateAction<boolean>>;
  }
  

  export const PopoverMenu = forwardRef<HTMLButtonElement, PopoverProps>(
    ({ children, getOpen, ...props}, ref: ForwardedRef<HTMLButtonElement>) => {
      const [isOpen, setOpen] = useState(false);
      const isMedia = useMedia({minWidth: '768px'})
      const [activeSection, setActiveSection] = useState('home');

      function getBooleanOpen() {
        const newOpenState = !isOpen;
        setOpen(newOpenState);
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
          <Popover.Content onPointerDownOutside={getBooleanOpen}
            className="PopoverContent bg-white rounded-bl-xl rounded-tl-xl backdrop-blur-xl shadow-xl dark:bg-gray-dark-100 data-[state=open]:animate-slideDownAndFade z-50"
            sideOffset={5}
          >
        <ul className="grid text-md ">
                    {links.map((item) => {
                        return (
                            <li key={item.title}><Link activeClass="active" className={`block relative transition-colors cursor-pointer py-2 px-4 text-lg before:content-[''] before:block before:absolute before:left-1 before:h-1/2 before:translate-y-[50%] before:top-0  before:w-0.5 ${activeSection === item.link ? ' dark:before:bg-gray-dark-400 before:bg-blue-light-200  dark:text-gray-dark-400 text-blue-light-200' : 'dark:hover:text-gray-dark-400 hover:text-blue-light-200'}`} onSetActive={setActiveSection} to={item.link} onClick={(getBooleanOpen)} spy={true} smooth={true} duration={500}>{item.title}</Link></li>
                        )
                    })}
                </ul>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      );
    }
  );


