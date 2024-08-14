import { tv } from 'tailwind-variants';
import { ComponentProps, ElementType } from "react"


type ButtonVariantProps = 'primary' | 'outline'


type ButtonProps = ComponentProps<'button'> & {
    state: ButtonVariantProps,
    iconLeft?: ElementType
}

 
const button = tv({
  base: 'text-sm flex max-[430px]:w-full items-center justify-center h-full white-space font-medium rounded-xl py-3 py-3 max-[430px]:px-4 px-10 transition dark:opacity-80 dark:hover:opacity-100 hover:opacity-80 font-extrabold h-full',
  variants: {
    state: {
      primary: 'bg-linear-button-light dark:bg-linear-blue dark:text-blue-dark-200 text-gray-light-100 font-bold',
      outline: 'dark:text-blue-dark-100 border dark:border-blue-dark-200 border-[#2c96df78] text-blue-light-200'
    },
  defaultVariants: {
    state: 'primary'
  }
}
});
 

export const Button = ({children, state, className, iconLeft: IconLeft, ...props}: ButtonProps) => {
    return(
        <button {...props} className={button({state, className})}>
            {IconLeft && <IconLeft size={18} className="mr-2"/>}
            {children}
        </button>
    )
}