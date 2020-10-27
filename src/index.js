import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Nav from "./Pages/Components/Nav/Nav";
import "./index.css";
import "./Styles/reset.scss";
import "./Styles/common.scss";
// import ProductList from "./Pages/ProductList/ProductList";
import Cart from "./Pages/Components/Cart";

ReactDOM.render(<Cart />, document.getElementById("root"));

