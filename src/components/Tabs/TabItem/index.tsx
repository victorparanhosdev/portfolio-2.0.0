import * as Tabs from "@radix-ui/react-tabs";
import { tv } from 'tailwind-variants';
import { motion } from 'framer-motion'

const tabsStyles = tv({
  base: 'relative md:rounded-r-md md:text-start text-center w-full md:border-l-2 border-b-2 border-victor-200 md:border-b-0 border-victor-500  dark:border-victor-200 md:border-l-victor-500 block py-4 px-4 sm:px-9 data-[state="active"]:bg-victor-500 dark:data-[state="active"]:bg-dark-20 dark:data-[state="active"]:text-victor-500',

})


interface TabItemProps {
    value: string
    title: string
    isSelected: boolean
  }
  


export const TabItem = ({isSelected, title, value}:TabItemProps) => {

    return(
        <Tabs.Trigger className={tabsStyles()} value={value}><span>{title}</span>{isSelected && (
            <motion.div
              layoutId="activeTab"
              className="absolute left-0 md:-left-px bottom-0 md:top-0 md:h-full w-full md:w-0.5 h-0.5 bg-victor-600 "
            />
          )}</Tabs.Trigger>
    )
}