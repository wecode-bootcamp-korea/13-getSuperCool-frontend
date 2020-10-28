import React from "react";
import ReactDOM from "react-dom";
import Contact from "./Pages/Contact/Contact";
import ForgotPw from "./Pages/LoginRegister/Components/ForgotPw";
// import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
// import Nav from "./Pages/Components/Nav/Nav";
import "./index.css";
import "../src/Styles/common.scss";
import "../src/Styles/reset.scss";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";

ReactDOM.render(<Routes />, document.getElementById("root"));
