import React, { Component } from "react";
import Logo from "./Logo";
import Cart from "../Cart";
import "./Nav.scss";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor()  {
    super();
    this.state = {
      visible: false
    };
  }

  handleCart = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { visible } = this.state;
    
    return (
      <div className="Nav">
        <Link className="link" to={"/"}><Logo /></Link>
        <div className="NavCenter">
          <Link className="link" to ={"/shop"}><span>SHOP</span></Link>
          <span>ABOUT</span>
        </div>
        <div className="NavRight">
          <select dir="rtl" id="lang-select">
            <option value="EUROPE">EUROPE</option>
            <option value="ITALY">ITALY</option>
            <option value="SPAIN">SPAIN</option>
            <option value="UNITED KINGDOM">UNITED KINGDOM</option>
          </select>
          <label for="lang-select" aria-label="select language"></label>
          <svg viewBox="0 0 11 6" class="Icon__StyledSvg-sc-10qpb8y-0 dzeaZG">
            <path d="M10.568 2.89022L10.568 0.586218L5.576 3.22622L0.536 0.586218L0.536 2.89022L5.576 5.74622L10.568 2.89022Z"></path>
          </svg>
          <p>CART</p>
          <div>
            <div onClick={this.handleCart} className="circle"></div>
            <svg
              onClick={this.handleCart}
              viewBox="0 0 307.772 354.263"
              class="Icon__StyledSvg-sc-10qpb8y-0 cWnymm bag"
            >
              <path
                d="M270.491,301.857,252.006,77.695a9.5,9.5,0,0,0-9.451-8.511H196.948v-10.4a58.786,58.786,0,0,0-117.573,0v10.4H33.767a9.5,9.5,0,0,0-9.451,8.511L.051,308.77A9.5,9.5,0,0,0,9.5,319.263H266.818c2.694,0,3.607-1.142,5.407-3.142s-1.454-11.587-1.735-14.264ZM98.379,58.786a39.782,39.782,0,0,1,79.565,0v10.4H98.379ZM20.054,300.26,42.325,88.188H79.375v20.94a9.5,9.5,0,1,0,19,0V88.188h79.565v20.94a9.5,9.5,0,0,0,19,0V88.188H234l22.27,212.072Zm0,0"
                transform="translate(17.522 17.5)"
                stroke-width="35"
              ></path>
            </svg>
          </div>
          <div>
            <Link to={"/LoginRegister"}><div className="circle"></div></Link>
            <Link to={"/LoginRegister"}><svg
              id="userIcon"
              viewBox="0 0 13 13"
              class="Icon__StyledSvg-sc-10qpb8y-0 kopxmH"
            >
              <path d="M9.24857 6.19357C9.84286 5.53429 10.2143 4.67071 10.2143 3.71429C10.2143 1.66214 8.55214 0 6.5 0C4.44786 0 2.78571 1.66214 2.78571 3.71429C2.78571 4.67071 3.15714 5.53429 3.75143 6.19357C1.54143 7.22429 0 9.47143 0 12.0714V13H13V12.0714C13 9.47143 11.4586 7.22429 9.24857 6.19357ZM4.64286 3.71429C4.64286 2.69286 5.47857 1.85714 6.5 1.85714C7.52143 1.85714 8.35714 2.69286 8.35714 3.71429C8.35714 4.73571 7.52143 5.57143 6.5 5.57143C5.47857 5.57143 4.64286 4.73571 4.64286 3.71429ZM1.95 11.1429C2.37714 9.02571 4.26214 7.42857 6.5 7.42857C8.73786 7.42857 10.6136 9.02571 11.05 11.1429H1.95Z"></path>
            </svg></Link>
          </div>
        </div>
        {visible && <Cart handleCart={this.handleCart} />}
      </div>
    );
  }
}

export default Nav;
