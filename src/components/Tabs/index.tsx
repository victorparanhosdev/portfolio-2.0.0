import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { AnimatePresence, motion } from 'framer-motion';
import useMedia from 'use-media';
import { useTranslations } from 'next-intl';

export const TabsNav = ({ ...props }: Tabs.TabsProps) => {
  const [currentTab, setCurrentTab] = useState<string>('stefanini');
  const isMd = useMedia({ minWidth: '768px' });
  const t = useTranslations('Experience');
  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      {...props}
      className={`grid md:flex gap-16 sm:gap-16 md:gap-20 min-w-52 ${props.className}`}
    >
      <Tabs.List className="md:block flex">
        <TabItem isSelected={currentTab === 'stefanini'} title="Stefanini" value="stefanini" />
        <TabItem isSelected={currentTab === 'vtrina'} title="Vtrina" value="vtrina" />
        <TabItem isSelected={currentTab === 'dires'} title="Dires" value="dires" />
      </Tabs.List>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab}
          initial={isMd ? { x: 10, opacity: 0 } : { y: 10, opacity: 0 }}
          animate={isMd ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
          className="w-full"
          transition={{ duration: 0.4 }}
        >
          <Tabs.Content value="stefanini">
            <div className="flex items-center justify-between gap-1 sm:flex-row flex-col sm:mb-8 md:mb-0">
              <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                {t('stefanini')}
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">{t('stefaniniData')}</span>
            </div>
            <div className='mt-6 mb-8'>
              <span className="dark:text-blue-dark-100 text-md font-medium text-blue-light-200 mr-1.5">Stefanini</span>
              <span className='text-xs'>({t('stefaniniLocal')} - Salvador/BA)</span>
            </div>
            <ul className="list-disc list-inside">
              <li>{t("stefaniniLi")}</li>
              <li>{t("stefaniniLi2")}</li>
              <li>{t("stefaniniLi3")}</li>
            </ul>
          </Tabs.Content>

          <Tabs.Content value="vtrina">
            <div className="flex items-center justify-between gap-1 sm:flex-row flex-col sm:mb-8 md:mb-0">
              <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                {t('vtrina')}
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">{t('vtrinaData')}</span>
            </div>
            <div className='mt-6 mb-8'>
              <span className="dark:text-blue-dark-100 text-md font-medium text-blue-light-200 mr-1.5">Vtrina</span>
              <span className='text-xs'>({t('vtrinaLocal')} - Curitiba/PR)</span>
            </div>
            <ul className="list-disc list-inside">
              <li>{t("vtrinaLi")}</li>
              <li>{t("vtrinaLi2")}</li>
              <li>{t("vtrinaLi3")}</li>
            </ul>
          </Tabs.Content>

          <Tabs.Content value="dires">
            <div className="flex items-center justify-between gap-1 sm:flex-row flex-col sm:mb-8 md:mb-0">
              <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                {t('dires')}
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">{t('diresData')}</span>
            </div>
            <div className='mt-6 mb-8'>
              <span className="dark:text-blue-dark-100 text-md font-medium text-blue-light-200 mr-1.5">Dires</span>
              <span className='text-xs'>({t('diresLocal')} - Cruz das Almas/BA)</span>
            </div>
            <ul className="list-disc list-inside">
              <li>{t("diresLi")}</li>
              <li>{t("diresLi2")}</li>
              <li>{t("diresLi3")}</li>
              <li>{t("diresLi4")}</li>
              <li>{t("diresLi5")}</li>
            </ul>
          </Tabs.Content>

        </motion.div>
      </AnimatePresence>
    </Tabs.Root>
  );
};
