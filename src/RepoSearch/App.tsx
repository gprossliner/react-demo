import * as React from "react";

import RepoSearch from "./components/RepoSearch";

export default (
    props : {
        name : string
    }
) =>

<div className="container">
    <div className="jumbotron">
        <h1>Hello {props.name}</h1>
        
        <RepoSearch />
    
    </div>


</div>