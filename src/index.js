import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import ProductList from "./Pages/Components/ProductList/ProductList";
import "./index.css";
import "./Styles/common.scss";
import "./Styles/reset.scss";

ReactDOM.render(<ProductList />, document.getElementById("root"));
