import * as React from "react";
import { Repository } from "../shared/repository.model"
import RepoList from "./RepoList"

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

    constructor(props){
        super(props);

        // create initial state
        this.state = {
            searchResult : [
           /*     {
                    description : "desc",
                    forksCount : 0,
                    name : "name",
                    owner : "owner",
                    ownerAvatarUrl : "ulr",
                    repositoryUrl : "file://",
                    watchersCount : 0
                } */
            ],
            searchText : ""
        };
        
    }

    render() {

        const res = this.state.searchResult;
        const searchActive = !!this.state.searchText;

        var badgeSpan = res.length > 0 && <span className="badge">{res.length}</span>;

        return <div>
            <h3 className="repo-search">Github Repos {badgeSpan}</h3>
            <div className="input-group ">
                <input type="text" className="form-control" placeholder="Search Github Repos...." />
                {searchActive && <span>Ihre Suche nach <b>{this.state.searchText}</b> ergab folgende Treffer:</span>}            
            </div>
            <RepoList repositories={this.state.searchResult} />
        </div>;
    }

}