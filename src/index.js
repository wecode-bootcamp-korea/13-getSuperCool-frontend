import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
// import Contact from "./Pages/Contact/Contact";
// import ForgotPw from "./Pages/LoginRegister/Components/ForgotPw";
import "./index.css";
import "../src/Styles/common.scss";
import "../src/Styles/reset.scss";

ReactDOM.render(
  <LoginRegister />,

  document.getElementById("root")
);
