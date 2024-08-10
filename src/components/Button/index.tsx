import { tv } from 'tailwind-variants';
import { ComponentProps, ElementType } from "react"


type ButtonVariantProps = 'primary' | 'outline'


type ButtonProps = ComponentProps<'button'> & {
    state: ButtonVariantProps,
    iconLeft?: ElementType
}

 
const button = tv({
  base: 'text-sm flex max-[430px]:w-full items-center justify-center h-full white-space font-medium rounded-xl py-[12px] py-2.5 max-[430px]:px-4 px-10 transition opacity-80 hover:opacity-100',
  variants: {
    state: {
      primary: 'dark:bg-linear-blue border-transparent dark:text-blue-dark-200 font-bold',
      outline: 'dark:text-blue-dark-100 dark:border dark:border-blue-dark-200'
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