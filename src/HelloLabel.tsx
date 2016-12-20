import * as React from "react";     // we always need to import react
export default (                    // we just export a single function, which represents the "render" function
    props : {                       // define the contract for the props
        name : string,       // a name property as string, try refactor!!!!!
        hobbies : string[]
    }
) =>

<div>
    Hello {props.name}!
    Your hobbies are: 
    <ul>
    {props.hobbies.map(h=>
        <li key={h}>{h}</li>
    )}
    </ul>
</div>