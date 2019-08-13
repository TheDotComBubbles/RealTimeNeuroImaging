import toast from 'iziToast';
import "xss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/custom.scss";

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
