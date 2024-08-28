'use client'
import { ComponentProps, useState } from "react"
import { Button } from "../Button"
import { GithubLogo, Link } from "@phosphor-icons/react/dist/ssr"
import { GitHubRepo } from "@/types/GithubTypes"
import Image from "next/image"


type CardProps = ComponentProps<'div'> & {
    projetos?: GitHubRepo
}

export const Card = ({projetos, ...props}: CardProps) => {
    const [hasImage, setHasImage] = useState(true);
  
  const imgSrc = `https://raw.githubusercontent.com/victorparanhosdev/${projetos?.name}/${projetos?.default_branch}/layout.png`;

  const handleImageError = () => {
    setHasImage(false);
  };
    
    return(
        <div {...props} className="w-full">
            <div  className="flex items-center justify-center border-l-2 dark:border-blue-dark-100 w-full h-[200px] border-blue-light-200 bg-[#f0f6ff] dark:bg-gray-dark-100">
                {hasImage ? (
          <Image
            className="object-cover w-full h-full"
            src={imgSrc}
            width={400}
            height={400}
            priority
            alt={projetos?.name || "Projeto"}
            onError={handleImageError}
          />
        ) : (
          <h1 className="flex items-center justify-center w-full h-full text-xl font-bold text-gray-500">
            SEM IMAGEM
          </h1>
        )}
            </div>

            <h1 className="mt-10 dark:text-white text-xl font-medium text-blue-light-400">{projetos?.name}</h1>
            <p className="mt-8 text-base min-h-24 max-h-24 overflow-y-auto">{projetos?.description}</p>
            <p className="mt-6 dark:text-blue-dark-100 text-blue-light-200">Tecnologias usadas no projeto</p>
            <div className="max-[330px]:grid mt-10 flex max-[330px]:gap-4 gap-6">
                {projetos?.homepage && <a href={projetos?.homepage} target="_blank" className="max-[430px]:w-full"><Button iconLeft={Link} state="primary">Visualizar</Button></a>}
                {projetos?.html_url && <a href={projetos?.html_url} target="_blank" className="max-[430px]:w-full><Button iconLeft={GithubLogo} state="outline">Código</Button></a>}
            </div>
        </div>
    )
}