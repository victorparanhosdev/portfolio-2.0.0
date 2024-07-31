import * as Tabs from "@radix-ui/react-tabs";
import { tv } from 'tailwind-variants';
import { motion } from 'framer-motion'

const tabsStyles = tv({
  base: 'relative rounded-r-md text-start w-full border-l-2 border-l-dark-30 block py-4 px-9  data-[state="active"]:bg-dark-20',

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
              className="absolute -left-px top-0 h-full w-0.5 bg-brand-color "
            />
          )}</Tabs.Trigger>
    )
}