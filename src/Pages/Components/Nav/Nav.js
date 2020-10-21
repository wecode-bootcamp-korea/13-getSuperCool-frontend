import React, { Component } from "react";
import "./Nav.scss";
import Logo from "./logo.svg";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img src={Logo} alt="logo" />
        <div className="NavCenter">
          <p>SHOP</p>
          <p>ABOUT</p>
        </div>
        <div className="NavRight">
          <p>EUROPE</p>
          <p>CART</p>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Nav;
