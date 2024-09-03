import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { AnimatePresence, motion } from 'framer-motion';
import useMedia from 'use-media';

export const TabsNav = ({ ...props }: Tabs.TabsProps) => {
  const [currentTab, setCurrentTab] = useState<string>('stefanini');
  const isMd = useMedia({ minWidth: '768px' });

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
                Desenvolvedor Júnior
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">Junho 2024 - Atual</span>
            </div>
            <span className="dark:text-blue-dark-100 block text-md font-medium mt-6 text-blue-light-200 mb-8">
              Stefanini
            </span>
            <ul className="list-disc list-inside">
              <li>Responsável pelo desenvolvimento do novo Sistema Estadual de Informações Ambientais e Recursos Hídricos (SEIA).</li>
              <li>Implementação de novas funcionalidades e correção de bugs.</li>
              <li>Trabalho em equipe, contribuindo com ideias e melhorias para o sistema.</li>
            </ul>
          </Tabs.Content>
          <Tabs.Content value="vtrina">
            <div className="flex items-center sm:flex-row flex-col justify-between gap-1 sm:mb-8 md:mb-0">
              <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                Estagiário de Suporte Técnico
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">Janeiro 2024 - Junho 2024</span>
            </div>
            <span className="dark:text-blue-dark-100 block text-md font-medium mt-6 text-blue-light-200 mb-8">
              Vtrina
            </span>
            <ul className="list-disc list-inside">
              <li>Identificar e diagnosticar problemas técnicos buscando soluções.</li>
              <li>Auxiliar o cliente na resolução de problemas.</li>
              <li>Prestar suporte técnico para resolver questões do cliente.</li>
            </ul>
          </Tabs.Content>
          <Tabs.Content value="dires">
            <div className="flex sm:flex-row flex-col items-center justify-between gap-1 sm:mb-8 md:mb-0">
              <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                Técnico de Informática
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">Maio 2014 - Maio 2024</span>
            </div>
            <span className="dark:text-blue-dark-100 block text-md font-medium mt-6 text-blue-light-200 mb-8">
              Dires
            </span>
            <ul className="list-disc list-inside">
              <li>Responsável por dar suporte e manutenção nos programas de saúde, mantendo sempre atualizados.</li>
              <li>Instalação e reparos de programas de saúde.</li>
              <li>Consolidar as informações de dados dos municípios da região para o Ministério da Saúde.</li>
              <li>Manutenção de computadores e rede.</li>
              <li>Suporte a colaboradores.</li>
            </ul>
          </Tabs.Content>
        </motion.div>
      </AnimatePresence>
    </Tabs.Root>
  );
};
