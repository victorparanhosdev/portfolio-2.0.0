import { Moon, Sun } from '@phosphor-icons/react';
import * as Switch from '@radix-ui/react-switch';
import { ComponentProps } from 'react';

type SwitchProps = ComponentProps<typeof Switch.Root>

export const SwitchTheme = ({...props}:SwitchProps) => {
    return(
    <Switch.Root  {...props} className= 'justify-between relative inline-flex h-[34px] w-[66px] shrink-0 cursor-pointer items-center rounded-full transition-colors dark:bg-gray-dark-200 bg-gray-light-200'>
        <Switch.Thumb  className='z-[0] absolute pointer-events-none block h-7 w-7 rounded-full bg-white shadow-lg ring-0 duration-300 transition-transform data-[state=checked]:translate-x-[34px] data-[state=unchecked]:translate-x-1'/>
        <Sun size={14} weight='fill' className='relative z-[1] ml-[11px] dark:fill-gray-dark-300 fill-blue-dark-300'/>
        <Moon size={14} weight='fill' className='relative z-[1] mr-[11px] dark:fill-blue-dark-200 fill-blue-light-500'/>

    </Switch.Root>
    )
}