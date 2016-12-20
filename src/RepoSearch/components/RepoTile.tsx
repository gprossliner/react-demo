import * as React from "react";
import { Repository } from "../shared/repository.model"
import NgIf from "./NgIf"

export default (
    props : {
        repository : Repository
    }
) =>

<div className="media">
    <div className="media-left">
        <NgIf condition={!!props.repository.ownerAvatarUrl}>
            <a target="_blank" href={props.repository.repositoryUrl}>
                <img className="media-object img-rounded" height="50" src={props.repository.ownerAvatarUrl} alt={props.repository.name} />
            </a>
        </NgIf>
    </div>
    <div className="media-body">
        <h4 className="media-heading">{props.repository.name}</h4>
        {props.repository.description}
    </div>
    <span className="media-right">
        <a href="#">Watchers <span className="badge">{props.repository.watchersCount}</span></a>
        <a href="#">Forks <span className="badge">{props.repository.forksCount}</span></a>           
    </span>    
</div>