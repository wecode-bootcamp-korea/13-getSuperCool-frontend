import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import ProductList from "./Pages/ProductList/ProductList";
import "./index.css";
import "../src/Styles/common.scss";
import "../src/Styles/reset.scss";



ReactDOM.render(<Routes />, document.getElementById("root"));

