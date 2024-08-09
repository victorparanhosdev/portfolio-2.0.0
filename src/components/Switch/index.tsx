import { Moon, SunDim } from '@phosphor-icons/react';
import * as Switch from '@radix-ui/react-switch';
import { ComponentProps } from 'react';

type SwitchProps = ComponentProps<typeof Switch.Root>

export const SwitchTheme = ({...props}:SwitchProps) => {
    return(
    <Switch.Root  {...props} className= ' justify-between  relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border border-victor-200 bg-victor-500  transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-600 data-[state=checked]:border-neutral-600 data-[state=unchecked]:bg-input'>
        <Switch.Thumb  className=' absolute pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0'/>
        <SunDim size={14} className='ml-1 fill-victor-600'/>
        <Moon size={14} weight='fill' className='mr-1 fill-victor-700'/>

    </Switch.Root>
    )
}