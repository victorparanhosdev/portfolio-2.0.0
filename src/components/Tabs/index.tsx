
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { tv } from 'tailwind-variants';


const tabsStyles = tv({
  base: 'rounded-r-md text-start w-full border-l-2 border-l-dark-30 block py-4 px-9 data-[state="active"]:border-l-2 data-[state="active"]:border-l-brand-color data-[state="active"]:bg-dark-20',

})



export const TabsNav = ({ ...props }: Tabs.TabsProps) => (
  <Tabs.Root {...props} className={`flex gap-24 min-w-52 ${props.className}`}>
    <Tabs.List className='' >
      <Tabs.Trigger className={tabsStyles()} value="stefanini">Stefanini</Tabs.Trigger>
      <Tabs.Trigger className={tabsStyles()} value="vtrina">Vtrina</Tabs.Trigger>
      <Tabs.Trigger className={tabsStyles()} value="dires">Dires</Tabs.Trigger>
    </Tabs.List>
    <div>
      <Tabs.Content value="stefanini">
        <div className='flex items-center justify-between gap-1'>   
          <h1 className='font-medium text-2xl text-white'>Desenvolvedor Junior</h1>
          <span className='text-white'>Junho 2024 - Atual</span>
        </div>

        <span className='text-brand-color block text-md font-medium mt-6 mb-8'>Stefanini</span>
        <p >Desenvovedor de sistemas do Projeto SEIA Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae alias corporis ullam dolorem ut enim hic quas dolorum aperiam excepturi commodi, tenetur iste quod. Autem deleniti nemo architecto sunt?</p>
      </Tabs.Content>

      <Tabs.Content value="vtrina">
        <div className='flex items-center justify-between gap-1'> 
          <h1 className='font-medium text-2xl text-white'>Estagiário de Suporte Técnico</h1>
          <span className='text-white'>Janeiro 2024 - Junho 2024</span>
        </div>

        <span className='text-brand-color block text-md font-medium mt-6 mb-8'>Vtrina</span>
        <p > Identificar e diagnosticar problemas técnicos buscando soluções. Auxiliar o cliente na resolução de problemas.
          - Prestar Suporte Técnico para resolver questões do cliente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos? Ipsam velit blanditiis quidem amet, laudantium possimus iusto laboriosam voluptate! Nemo veritatis repellendus quasi fugiat illum ipsum veniam possimus fugit?Lorem ipsum dolor sit amet, consectetur adipisicamet consectetur adipisicing elit. Exercitationem nam harum at molestiae totam quia reprehenderit, est consectetur nulla error natus dolore rerum atque odio ullam! Ad quos numquam asperiores?</p>
      </Tabs.Content>
      <Tabs.Content value="dires">
        <div className='flex items-center justify-between gap-1'>   <h1 className='font-medium text-2xl text-white'>Técnico de Informática</h1><span className='text-white'>Maio 2014 - Maio 2024</span></div>

        <span className='text-brand-color block text-md font-medium mt-6 mb-8'>Dires</span>
        <p>- Responsável por dar suporte e manutenção nos programas de saúde, mantendo sempre atualizados;
          - Instalação/Reparos de programas de saúde;
          - Responsável por consolidar as informações de dados dos municípios da região para o ministério da saúde;
          - Manutenção de computador e Rede;
          - Suporte a colabores.</p>
      </Tabs.Content>


    </div>
  </Tabs.Root>
);

