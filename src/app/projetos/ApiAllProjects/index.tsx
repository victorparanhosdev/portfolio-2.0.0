import { CardAllProjects } from "@/components/CardAllProjects";
import { GitHubRepo } from "@/types/GithubTypes";

export async function ApiAllProjects() {

    const response: GitHubRepo[] = await fetch('https://api.github.com/users/victorparanhosdev/repos?sort=updated_at').then(data => {
        if (!data.ok) {
            throw new Error('Erro ao buscar os dados');
        }
        
        return data.json()
    }).catch((error)=> console.log(error));


    return(
        <div className="grid grid-cols-allprojects gap-4">
        {response.map(repo => (
            <CardAllProjects key={repo.id} projects={repo} />
        ))}

    </div>
    )
}