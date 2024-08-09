import React, { ComponentProps, Dispatch, ForwardedRef, forwardRef, ReactNode, SetStateAction, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { links } from '../Header';
import { Link } from 'react-scroll';

interface PopoverProps extends ComponentProps<'button'>{
    children: ReactNode;
    getOpen: Dispatch<SetStateAction<boolean>>;
  }
  

  export const PopoverMenu = forwardRef<HTMLButtonElement, PopoverProps>(
    ({ children, getOpen, ...props}, ref: ForwardedRef<HTMLButtonElement>) => {
      const [isOpen, setOpen] = useState(false);

      function getBooleanOpen() {
        const newOpenState = !isOpen;
        setOpen(newOpenState);
        getOpen(newOpenState);
      }
  
      return (
        <Popover.Root open={isOpen} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button ref={ref} {...props} >
            {children}
          </button>
        </Popover.Trigger>
        <Popover.Portal>          
          <Popover.Content onPointerDownOutside={getBooleanOpen}
            className="PopoverContent rounded-bl-xl rounded-tl-xl backdrop-blur-xl bg-black/80 data-[state=open]:animate-slideDownAndFade z-50"
            sideOffset={5}
          >
        <ul className="grid text-md text-center divide-y-[1px] divide-transparent">
                    {links.map((item) => {
                        return (
                            <li key={item.title} className="transition-colors cursor-pointer dark:hover:text-victor-400 p-2 text-lg"><Link activeClass="active" className={item.link} to={item.link} onClick={getBooleanOpen} spy={true} smooth={true} duration={500}>{item.title}</Link></li>
                        )
                    })}
                </ul>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      );
    }
  );


