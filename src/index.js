import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import ProductList from "./Pages/Components/ProductList/ProductList";
import "./index.css";
import "../src/Styles/common.scss";
import "../src/Styles/reset.scss";

ReactDOM.render(<ProductList />, document.getElementById("root"));
