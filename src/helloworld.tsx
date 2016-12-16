import * as React from "react";

interface HelloWorldProps {
  /* currently we don't have any props */
}

interface HelloWorldState {
  /* currently we don't have any state */
}


export default class extends 
React.Component<HelloWorldProps, HelloWorldState> {
  render() {
    return <div>Hello World!</div>;
  }
}
