import { ComponentProps } from "react"
import { Button } from "../Button"

type CardProps = ComponentProps<'div'> & {}

export const Card = ({...props}: CardProps) => {
    return(
        <div {...props} className="w-full">
            <div className="flex items-center justify-center bg-dark-10 border-l-2 border-brand-color w-full h-[200px]">
                <h1 className="text-brand-color">Imagem Projeto</h1>
            </div>

            <h1 className="mt-10 text-white text-xl font-medium">Nome do Projeto</h1>
            <p className="mt-8 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptate animi quae placeat commodi quo at, aliquam temporibus voluptatibus assumenda molestiae </p>
            <p className="mt-6 text-brand-color">Tecnologias usadas no projeto</p>
            <div className="mt-10 grid sm:flex items-center gap-6">
                <Button state="primary">Acessar o projeto</Button>
                <Button state="outline">Acessar o repositório</Button>
            </div>
        </div>
    )
}