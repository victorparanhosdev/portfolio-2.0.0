import { GitHubRepo } from "@/types/GithubTypes"
import { GithubLogo, Link } from "@phosphor-icons/react/dist/ssr"
import { ComponentProps } from "react"
import { RiGitRepositoryLine } from "react-icons/ri"

type CardAllProjectsProps = ComponentProps<'div'> & {
    projects?: GitHubRepo
}

export const CardAllProjects = ({projects ,...props}: CardAllProjectsProps) => {
    return (
        <div {...props} className={`${props.className} shadow-md transition-shadow duration-200 hover:shadow-[#2c96df78] dark:hover:shadow-gray-dark-200  border p-3 flex flex-col rounded-xl dark:bg-gray-dark-100  min-h-[120px] dark:border-0 bg-[#f0f6ff47] border-[#2c96df78] text-blue-light-100 dark:text-gray-dark-300 `}>
        <div className="flex items-center gap-3 mb-3"><RiGitRepositoryLine size={20}/> <a target="_blank" href={projects?.html_url} className="font-bold text-lg text-blue-light-200 dark:text-blue-dark-100 hover:underline truncate">{projects?.name}</a></div>
        <p className="text-xs overflow-hidden text-ellipsis min-[548px]:line-clamp-3 mb-3">{projects?.description}</p>

            <div className="flex gap-3 mt-auto">
                {projects?.homepage && <a target="_blank" href={projects.homepage} className="hover:shadow-sm hover:shadow-slate-700 border border-[#2c96df78] dark:border-gray-dark-200 rounded-full p-2"><Link size={20}/></a>}
               {projects?.html_url &&  <a target="_blank" href={projects.html_url} className="hover:shadow-sm hover:shadow-slate-700 border border-[#2c96df78] dark:border-gray-dark-200 rounded-full p-2"><GithubLogo size={20}/></a>}
                
            </div>
            
        </div>

    )
}