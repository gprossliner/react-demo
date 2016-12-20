import * as React from "react";     // we always need to import react
export default (                    // we just export a single function, which represents the "render" function
    props : {                       // define the contract for the props
        name : string       // a name property as string, try refactor!!!!!
    }
) =>                 

<div>
    Hello {props.name}!
</div>
