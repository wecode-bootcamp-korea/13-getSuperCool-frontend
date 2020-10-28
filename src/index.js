import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import Nav from "./Pages/Components/Nav/Nav";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
import "./index.css";
import "../src/Styles/common.scss";
import "../src/Styles/reset.scss";

ReactDOM.render(
  <Routes />,

  document.getElementById("root")
);
