import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloLabel from "./HelloLabel";
import TimeButton from "./TimeButton";

ReactDOM.render(
  <div>
    <HelloLabel name="Günter" hobbies={["music", "programming"]} />
    <TimeButton />
  </div>,
  document.getElementById("root")
);