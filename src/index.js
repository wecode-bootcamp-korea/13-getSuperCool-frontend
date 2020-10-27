import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { ParallaxProvider } from "react-scroll-parallax";

import "./index.css";
import "./Styles/common.scss";
import "./Styles/reset.scss";


ReactDOM.render(
  <ParallaxProvider>
    <ProductDetails/>
  </ParallaxProvider>,
  document.getElementById("root")
);
