import * as React from "react";

class NgIf extends React.Component
<
    {
        condition : Boolean
    }, 
    {  // state        
    }
>
{    
    render() {
        return this.props.condition ? <div>{this.props.children}</div> : null;
    }

}

export default NgIf;
