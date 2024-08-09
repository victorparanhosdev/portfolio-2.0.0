import { tv } from 'tailwind-variants';
import { ComponentProps, ElementType } from "react"


type ButtonVariantProps = 'primary' | 'outline'


type ButtonProps = ComponentProps<'button'> & {
    state: ButtonVariantProps,
    iconLeft?: ElementType
}

 
const button = tv({
  base: 'text-sm flex max-[430px]:w-full items-center justify-center border h-full white-space font-medium rounded-xl border-text-100 py-[12px] py-2.5 max-[430px]:px-4 px-10 active:opacity-80  transition',
  variants: {
    state: {
      primary: 'dark:border-0 dark:bg-linear-victor dark:text-victor-700 hover:opacity-80',
      outline: 'dark:border-0 bg-transparent dark:text-victor-600 hover:opacity-80 '
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