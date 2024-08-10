import * as Tabs from "@radix-ui/react-tabs";
import { tv } from 'tailwind-variants';
import { motion } from 'framer-motion'

const tabsStyles = tv({
  base: 'relative md:rounded-r-md md:rounded-tl-none md:rounded-bl-none  md:text-start text-center w-full md:border-l-2 border-b-2 border-victor-200 md:border-b-0 dark:border-gray-dark-100 md:border-l-victor-500 block py-4 px-4 sm:px-9 dark:data-[state="active"]:bg-gray-dark-100 dark:data-[state="active"]:text-gray-dark-400 rounded-tl-md rounded-tr-md data-[state=active]:bg-[#00000012] data-[state=active]:text-blue-light-200 border-[#00000012]',

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
              className=" absolute left-0 -bottom-px md:-left-px md:top-0 md:h-full w-full md:w-0.5 h-0.5 dark:bg-blue-dark-100 bg-blue-light-200"
            />
          )}</Tabs.Trigger>
    )
}