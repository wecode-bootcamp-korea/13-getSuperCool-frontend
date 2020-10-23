import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import ProductDetails from "./Pages/ProductDetails/ProductDetails"

import "./index.css";
import "./Styles/common.scss";
import "./Styles/reset.scss";
import LeftSlider from "./Pages/ProductDetails/ComponentYH/LeftSlider";
import RightSlider from "./Pages/ProductDetails/ComponentYH/RightSlider";


ReactDOM.render(
  // <LeftSlider/>,
  // <RightSlider/>,

  <ProductDetails/>,

  // <BrowserRouter>
  //   <Routes/>
  // </BrowserRouter>,
  document.getElementById("root")
);