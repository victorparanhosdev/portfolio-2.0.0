import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { AnimatePresence, motion } from 'framer-motion';
import useMedia from 'use-media'

export const TabsNav = ({ ...props }: Tabs.TabsProps) => {
  const [currentTab, setCurrentTab] = useState<string>('stefanini');
  const isMd = useMedia({ minWidth: '768px' });

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab} {...props} className={`grid md:flex gap-24 min-w-52 ${props.className}`}>
      <Tabs.List className='md:block flex'>
        <TabItem isSelected={currentTab === 'stefanini'} title='Stefanini' value="stefanini" />
        <TabItem isSelected={currentTab === 'vtrina'} title='Vtrina' value="vtrina" />
        <TabItem isSelected={currentTab === 'dires'} title='Dires' value="dires" />
      </Tabs.List>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={isMd ? { x: 5, opacity: 0 } : { y: 5, opacity: 0 }}
            animate={isMd ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
            exit={isMd ? { x: -5, opacity: 0 } : { y: -5, opacity: 0 }}
            transition={{ duration: 0.2}}
          >
     
              <Tabs.Content value="stefanini">
                <div className='flex items-center justify-between gap-1 sm:flex-row flex-col'>   
                  <h1 className='font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100'>Desenvolvedor Junior</h1>
                  <span className='dark:text-gray-dark-400 text-blue-light-100'>Junho 2024 - Atual</span>
                </div>
                <span className='dark:text-blue-dark-100 block text-md font-medium mt-6 text-blue-light-200 mb-8'>Stefanini</span>
                <p>Desenvolvedor de sistemas do Projeto SEIA Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae alias corporis ullam dolorem ut enim hic quas dolorum aperiam excepturi commodi, tenetur iste quod. Autem deleniti nemo architecto sunt?</p>
              </Tabs.Content>
              <Tabs.Content value="vtrina">
                <div className='flex items-center sm:flex-row flex-col justify-between gap-1'> 
                  <h1 className='font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100'>Estagiário de Suporte Técnico</h1>
                  <span className='dark:text-gray-dark-400 text-blue-light-100'>Janeiro 2024 - Junho 2024</span>
                </div>
                <span className='dark:text-blue-dark-100 block text-md font-medium mt-6 text-blue-light-200 mb-8'>Vtrina</span>
                <p>Identificar e diagnosticar problemas técnicos buscando soluções. Auxiliar o cliente na resolução de problemas.
                  - Prestar Suporte Técnico para resolver questões do cliente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos? Ipsam velit blanditiis quidem amet, laudantium possimus iusto laboriosam voluptate! Nemo veritatis repellendus quasi fugiat illum ipsum veniam possimus fugit? Lorem ipsum dolor sit amet, consectetur adipisicamet consectetur adipisicing elit. Exercitationem nam harum at molestiae totam quia reprehenderit, est consectetur nulla error natus dolore rerum atque odio ullam! Ad quos numquam asperiores?</p>
              </Tabs.Content>
              <Tabs.Content value="dires">
                <div className='flex sm:flex-row flex-col items-center justify-between gap-1'>
                  <h1 className='font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100'>Técnico de Informática</h1>
                  <span className='dark:text-gray-dark-400 text-blue-light-100'>Maio 2014 - Maio 2024</span>
                </div>
                <span className='dark:text-blue-dark-100 block text-md font-medium mt-6 text-blue-light-200 mb-8'>Dires</span>
                <p>- Responsável por dar suporte e manutenção nos programas de saúde, mantendo sempre atualizados;
                  - Instalação/Reparos de programas de saúde;
                  - Responsável por consolidar as informações de dados dos municípios da região para o ministério da saúde;
                  - Manutenção de computador e Rede;
                  - Suporte a colaboradores.</p>
              </Tabs.Content>
          </motion.div>
        </AnimatePresence>

    </Tabs.Root>
  );
};
