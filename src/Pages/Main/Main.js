import React, { Component } from "react";
import "./Main.scss";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    );
  }
}

export default Main;
