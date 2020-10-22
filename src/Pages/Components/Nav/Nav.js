import React, { Component } from "react";
import Logo from "./Logo";
import NavCenter from "./NavCenter"
import NavRight from "./NavRight"
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Logo />
        <NavCenter />
        <NavRight />
      </div>
    );
  }
}

export default Nav;
