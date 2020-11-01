import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterLogo from "./FooterLogo"
import "../Footer/FooterLogo.scss";


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerTop">
          <div><Link className="link" to={"/"}>SHOP</Link></div>
          <div>ABOUT</div>
        </div>
        <div className="footerNewletter">
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
                <p><Link className="link" to={"/Contact"}>Contact Us</Link></p>
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
          <div className="email">
            <form>
              <input type="text" placeholder="EMAIL"></input>
              <button>OK</button>
            </form>
          </div>
          <div className="marquee">
            <div>
              <span>THE NEWSLETTER  ·  FREE SHIPPING ON ORDERS OVER 34€   ·  10% DISCOUNT IF YOU SUBSCRIBE THE NEWSLETTER  ·  FREE SHIPPING ON ORDERS OVER 34€   ·  10% DISCOUNT IF YOU SUBSCRIBE </span>
              <span>THE NEWSLETTER  ·  FREE SHIPPING ON ORDERS OVER 34€   ·  10% DISCOUNT IF YOU SUBSCRIBE  </span>
            </div>
          </div> 
        </div>
        <div className="footerLogo">
          <FooterLogo />
        </div>
        <span className="right">© 2020 SuperCool - All Rights Reserved</span>
      </div>
    );
  }
}

export default Footer;
