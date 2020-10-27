import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { ParallaxProvider } from "react-scroll-parallax";

import "./index.css";
<<<<<<< HEAD
import Main from "./Pages/Main/Main";

ReactDOM.render(<Main />, document.getElementById("root"));
=======
import "./Styles/common.scss";
import "./Styles/reset.scss";


ReactDOM.render(
  <ParallaxProvider>
    <ProductDetails/>
  </ParallaxProvider>,
  document.getElementById("root")
);
>>>>>>> main
