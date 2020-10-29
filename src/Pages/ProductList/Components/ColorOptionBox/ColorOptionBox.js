import React from "react";
import "./ColorOptionBox.scss";

class ColorOptionBox extends React.Component {
  render() {
    return (
      <div className="ColorOptionBox">
        <div className="colorOption">
          <div className="color color1">
            <div className="circle"></div>
            <p>RED</p>
          </div>
          <div className="color color2">
            <div className="circle"></div>
            <p>PINK</p>
          </div>
          <div className="color color3">
            <div className="circle"></div>
            <p>ORANGE</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ColorOptionBox;