import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { ParallaxProvider } from "react-scroll-parallax";
import Main from "./Pages/Main/Main";
import "./Styles/common.scss";
import "./Styles/reset.scss";
import "./index.css";

ReactDOM.render(<Main />, document.getElementById("root"));

