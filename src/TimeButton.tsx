import * as React from "react";


export default class TimeButton extends React.Component
<
    {
        // props
    }, 
    {  // state
        text : string 
    }
>
{

    constructor(props){
        super(props);

        // create initial state
        this.state = {
            text : "Waiting...."
        };
        
    }

    buttonClicked(event){
        clearInterval(this.timerID);
    }        

    private timerID : number;

    componentDidMount(){
        this.timerID = setInterval(
            () => this.setState({text : new Date().toLocaleTimeString()}),
            500
        );
    }

    componentDidUnmount(){
        clearInterval(this.timerID);        
    }

    render() {
        return <button title="Click me to stop" onClick={e=>this.buttonClicked(e)}>{this.state.text}</button>;
    }

}