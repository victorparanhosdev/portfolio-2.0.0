import { ComponentProps } from "react"
import { Button } from "../Button"
import { GithubLogo, Link } from "@phosphor-icons/react/dist/ssr"
import { GitHubRepo } from "@/types/GithubTypes"
import Image from "next/image"
import { useTranslations } from "next-intl"


type CardProps = ComponentProps<'div'> & {
    projetos?: GitHubRepo
}

export const Card = ({ projetos, ...props }: CardProps) => {
    const t = useTranslations('Card');
    return (
        <div {...props} className="w-full flex flex-col">
            <div className="rounded-xl overflow-hidden flex items-center justify-center w-full h-[200px] bg-[#f0f6ff] dark:bg-gray-dark-100">

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
            <p className="mt-8 sm:text-base overflow-hidden text-ellipsis sm:line-clamp-4 md:min-h-24">{projetos?.description}</p>

            <p className=" mt-6 dark:text-blue-dark-100 text-blue-light-200">{t('techs')}</p>

            <div className="mt-4 flex flex-wrap gap-1.5 dark:text-blue-dark-100 text-blue-light-200 items-center">
                {projetos && projetos?.topics ? (
                    projetos.topics.length === 1 && projetos.topics.includes('portfolio') ? (
                        <span
              
                        className="text-sm border dark:border-gray-800 bg-[#f0f6ff66] dark:bg-[#060c1452] border-[#2c96df78] rounded-lg py-1 px-2 font-medium capitalize"
                    >
                       {projetos.language}
                    </span>
                    ) : (
                        projetos.topics.every(tag => tag === 'portfolio') ? (
                            <span
 
                            className="text-sm border dark:border-gray-800 bg-[#f0f6ff66] dark:bg-[#060c1452] border-[#2c96df78] rounded-lg py-1 px-2 font-medium capitalize"
                        >
                            {projetos.language}
                        </span>
                        ) : (
                            projetos?.topics.map((tag, index) => {
                                if (tag === 'portfolio') return null;

                                return (
                                    <span
                                        key={index}
                                        className="text-sm border dark:border-gray-800 bg-[#f0f6ff66] dark:bg-[#060c1452] border-[#2c96df78] rounded-lg py-1 px-2 font-medium capitalize"
                                    >
                                        {tag}
                                    </span>
                                );
                            })
                        )
                    )
                ) : null}

            </div>

            <div className="mt-auto">
                <div className="max-[330px]:grid mt-10 flex max-[330px]:gap-4 gap-6">
                    {projetos?.homepage && <a href={projetos?.homepage} target="_blank" className="max-[430px]:w-full"><Button iconLeft={Link} state="primary">{t("buttonview")}</Button></a>}
                    {projetos?.html_url && <a href={projetos?.html_url} target="_blank" className="max-[430px]:w-full"><Button iconLeft={GithubLogo} state="outline">{t("buttoncode")}</Button></a>}
                </div>
            </div>
        </div>
    )
}