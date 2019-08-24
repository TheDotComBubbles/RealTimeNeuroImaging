import toast from 'iziToast';
import "xss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/custom.scss";
import io from 'socket.io-client';

let  ws = io('http://localhost:3000');

ReactDOM.render(
    <App socket={ws}/>, document.getElementById("app")
  );

if (module.hot) {
  module.hot.accept();
}
