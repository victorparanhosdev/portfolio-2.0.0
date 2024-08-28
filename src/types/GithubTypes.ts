export interface GitHubRepo {
    created_at: string;
    description: string;
    homepage: string;
    hooks_url: string;
    html_url: string;
    id: number;
    language: string;
    languages_url: string;
    name: string;
    node_id: string;
    notifications_url: string;
    open_issues: number;
    open_issues_count: number;
    contents_url: string,
    default_branch: string,
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    topics: string[];
    updated_at: string;
    url: string;

}