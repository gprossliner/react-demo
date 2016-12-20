import axios from 'axios';
import { Repository } from "../shared/repository.model"

export class GitHubService {    

    public findRepos(searchKey: string) {        

        let params = {
            q : searchKey,
            access_token : '697e181e5049dbfedba826ba4289b7e82971fdf2'
        };
        
        let url: string = `https://api.github.com/search/repositories`;
        let p = axios.get(url, { params : params })            
            .then((res) => {
                console.log(res);
                var repos = new Array<Repository>();
                for (let repoResult of res.data.items) {
                    repos.push(<Repository>{
                        id: repoResult.id,
                        description: repoResult.description,
                        forksCount: repoResult.forks_count,
                        name: repoResult.name,
                        owner: repoResult.owner.login,
                        ownerAvatarUrl: repoResult.owner.avatar_url,
                        watchersCount: repoResult.watchers_count,
                        repositoryUrl: repoResult.html_url
                    });
                }
                return repos;
            });

        return p;     
    }

} 