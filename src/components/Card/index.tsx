import { ComponentProps} from "react"
import { Button } from "../Button"
import { GithubLogo, Link } from "@phosphor-icons/react/dist/ssr"
import { GitHubRepo } from "@/types/GithubTypes"
import Image from "next/image"


type CardProps = ComponentProps<'div'> & {
    projetos?: GitHubRepo
}

export const Card = ({projetos, ...props}: CardProps) => {

    return(
        <div {...props} className="w-full flex flex-col">
            <div  className="rounded-xl overflow-hidden flex items-center justify-center w-full h-[200px] bg-[#f0f6ff] dark:bg-gray-dark-100">
               
          <Image
            className="object-cover w-full h-full"
            src={`https://raw.githubusercontent.com/victorparanhosdev/${projetos?.name}/${projetos?.default_branch}/layout.png`}
            width={400}
            height={400}
            priority
            alt={projetos?.name || 'Foto do Projeto'}
          />
            </div>

            <h1 className="mt-10 dark:text-white text-xl font-medium text-blue-light-400">{projetos?.name}</h1>
            <p className="mt-8 sm:text-base overflow-hidden text-ellipsis sm:line-clamp-4">{projetos?.description}</p>
            <div className="mt-auto">
            <p className=" mt-6 dark:text-blue-dark-100 text-blue-light-200">Tecnologias usadas no projeto</p>
            <div className="max-[330px]:grid mt-10 flex max-[330px]:gap-4 gap-6">
                {projetos?.homepage && <a href={projetos?.homepage} target="_blank" className="max-[430px]:w-full"><Button iconLeft={Link} state="primary">Visualizar</Button></a>}
                {projetos?.html_url && <a href={projetos?.html_url} target="_blank" className="max-[430px]:w-full"><Button iconLeft={GithubLogo} state="outline">Código</Button></a>}
            </div>
            </div>
        </div>
    )
}