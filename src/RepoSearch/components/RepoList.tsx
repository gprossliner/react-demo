import * as React from "react";
import { Repository } from "../shared/repository.model"
import RepoTile from "./RepoTile"

export default (
    props : {
        repositories : Repository[]
    }
) =>

<ul className="list-group">
    {props.repositories.map(r=>
        <li className="list-group-item" key={r.id}>
            <RepoTile repository={r} />
        </li>
    )}
</ul>