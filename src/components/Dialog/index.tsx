'use client'
import * as Dialog from '@radix-ui/react-dialog';
import { Dispatch, ReactNode, SetStateAction, useState, forwardRef, ForwardedRef, ComponentProps } from 'react';
import { links } from '../Header';
import { Link } from 'react-scroll';

interface DialogMenuProps extends ComponentProps<'button'>{
  children: ReactNode;
  getOpen: Dispatch<SetStateAction<boolean>>;
}

export const DialogMenu = forwardRef<HTMLButtonElement, DialogMenuProps>(
  ({ children, getOpen, ...props}, ref: ForwardedRef<HTMLButtonElement>) => {
    const [isOpen, setOpen] = useState(false);

    function getBooleanOpen() {
      const newOpenState = !isOpen;
      setOpen(newOpenState);
      getOpen(newOpenState);
    }

    return (
      <Dialog.Root open={isOpen} onOpenChange={getBooleanOpen}>
        <Dialog.Trigger asChild>
          <button ref={ref} {...props} >
            {children}
          </button>
        </Dialog.Trigger>
        <Dialog.Portal >
          <Dialog.Overlay className="bg-[#00000062] data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
          <Dialog.Content className="z-40 top-[68px] right-0 data-[state=open]:animate-contentShow fixed shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none bg-black border-l border-b border-brand-color rounded-bl-xl">
            <Dialog.Title className="sr-only"/>
            <Dialog.Description className="sr-only"/>
            <ul className="grid gap-4 p-6 text-white text-md">
                    {links.map((item) => {
                        return (
                            <li key={item.title} className=" transition-colors cursor-pointer hover:text-brand-color p-4"><Link activeClass="active" className={item.link} onClick={getBooleanOpen} to={item.link} spy={true} smooth={true} duration={500}>{item.title}</Link></li>
                        )
                    })}
                </ul>
             
            
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);

export default DialogMenu;
