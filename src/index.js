import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "babel-polyfill";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const rootNode = document.querySelector("#root");
ReactDOM.render(<App />, rootNode);
