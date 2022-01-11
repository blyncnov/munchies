import React from "react";
import ReactDOM from "react-dom";
import "./output.css";
import "./global.css";
import App from "./App";

const Index = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
