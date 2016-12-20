import * as React from "react";
import { Repository } from "../shared/repository.model"
import RepoList from "./RepoList"
import { GitHubService } from "../services/GitHubService";

export default class RepoSearch extends React.Component
<
    {
        // props
    }, 
    {  // state
        searchResult : Repository[],
        searchText : string
    }
>
{

    private _gitHubService : GitHubService;

    constructor(props){
        super(props);

        this._gitHubService = new GitHubService();        

        // create initial state
        this.state = {
            searchResult : [],
            searchText : ""
        };
        
    }

    handleKeyPress(e){
        if(e.key == "Enter"){
            const search = e.target.value;
            this.setState({
                searchText : search,
                searchResult : []
            });

            if(search.length > 0){
                this._gitHubService.findRepos(search)
                .then(repos=>{
                    console.log(repos);
                    this.setState({
                        searchText : search,
                        searchResult : repos
                    });
                });
            }                
            
        }
    }

    render() {

        const res = this.state.searchResult;
        const searchActive = !!this.state.searchText;

        var badgeSpan = res.length > 0 && <span className="badge">{res.length}</span>;

        return <div>
            <h3 className="repo-search">Github Repos {badgeSpan}</h3>
            <div className="input-group ">
                <input type="text" onKeyPress={e=>this.handleKeyPress(e)} className="form-control" placeholder="Search Github Repos...." />
                {searchActive && <span>Ihre Suche nach <b>{this.state.searchText}</b> ergab folgende Treffer:</span>}            
            </div>
            <RepoList repositories={this.state.searchResult} />
        </div>;
    }

}