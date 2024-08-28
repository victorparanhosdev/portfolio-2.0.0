import { GitHubRepo } from "@/types/GithubTypes";

export default async function ApiDataGithub(): Promise<GitHubRepo[]> {
    try {
        const response = await fetch('https://api.github.com/users/victorparanhosdev/repos');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const dados: GitHubRepo[] = await response.json();
        return dados;
    } catch (error) {
        console.error("Failed to fetch GitHub repos:", error);
        return []; // Retorna um array vazio em caso de erro
    }
}
