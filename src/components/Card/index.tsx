import { ComponentProps } from "react"
import { Button } from "../Button"
import { GithubLogo, Link } from "@phosphor-icons/react"

type CardProps = ComponentProps<'div'> & {}

export const Card = ({...props}: CardProps) => {
    return(
        <div {...props} className="w-full">
            <div  className="flex items-center justify-center border-l-2 dark:border-blue-dark-100 w-full h-[200px] border-blue-light-200 bg-[#f2f2f2] dark:bg-gray-dark-100">
                <h1 className="text-blue-light-200 dark:text-blue-dark-100">Imagem Projeto</h1>
            </div>

            <h1 className="mt-10 dark:text-white text-xl font-medium text-blue-light-400">Nome do Projeto</h1>
            <p className="mt-8 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptate animi quae placeat commodi quo at, aliquam temporibus voluptatibus assumenda molestiae </p>
            <p className="mt-6 dark:text-blue-dark-100 text-blue-light-200">Tecnologias usadas no projeto</p>
            <div className="max-[330px]:grid mt-10 flex max-[330px]:gap-4 gap-6">
                <Button iconLeft={Link} state="primary">Visualizar</Button>
                <Button iconLeft={GithubLogo} state="outline">Código</Button>
            </div>
        </div>
    )
}