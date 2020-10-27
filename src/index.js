import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Nav from "./Pages/Components/Nav/Nav";
import "./index.css";
import "../src/Styles/common.scss";
import "../src/Styles/reset.scss";

ReactDOM.render(<Nav />, document.getElementById("root"));
