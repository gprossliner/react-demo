import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloLabel from "./HelloLabel";

ReactDOM.render(
  <HelloLabel name="Günter" hobbies={["music", "programming"]} />,
  document.getElementById("root")
);