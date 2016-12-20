import * as React from "react";     // we always need to import react
export default (                    // we just export a single function, which represents the "render" function
    props : {
        name : string
    }
) =>                 

<div>
    Hello {props.name}!
</div>
