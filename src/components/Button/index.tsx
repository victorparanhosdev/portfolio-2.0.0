import { tv } from 'tailwind-variants';
import { ComponentProps } from "react"


type ButtonVariantProps = 'primary' | 'outline'


type ButtonProps = ComponentProps<'button'> & {
    state: ButtonVariantProps
}

 
const button = tv({
  base: 'text-base font-medium rounded-md py-2.5 px-10 active:opacity-80 hover:bg-brand-hover border border-brand-color transition',
  variants: {
    state: {
      primary: 'bg-brand-color text-dark-10',
      outline: 'bg-transparent text-brand-color hover:bg-brand-hover hover:text-dark-10'
    },
  defaultVariants: {
    state: 'primary'
  }
}
});
 

export const Button = ({children, state, className, ...props}: ButtonProps) => {
    return(
        <button {...props} className={button({state, className})}>
            {children}
        </button>
    )
}