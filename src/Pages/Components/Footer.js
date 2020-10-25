import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="section1">
          <div>SHOP</div>
          <div>ABOUT</div>
        </div>
        <div className="section2">
          <div className="detail">
            <div className="subscribe">
              <p>SUBSCRIBE</p>
              <p>TO THE</p>
              <p>NEWSLETTER</p>
            </div>
            <div className="help">
              <div>
                <p>HELP</p>
                <p>FAQ</p>
                <p>Contact Us</p>
                <p>Track Your Order</p>
                <p>Return Your Order</p>
              </div>
              <div>
                <p>LEGAL INFO</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
              </div>
              <div>
                <p>FOLLOW US</p>
                <p>Instagram</p>
                <p>Facebook</p>
              </div>
            </div>
          </div>
          <form>
            <input type="text" placeholder="EMAIL"></input>
            <button>OK</button>
          </form>
        </div>
        <div className="section3">로고</div>
      </div>
    );
  }
}

export default Footer;
