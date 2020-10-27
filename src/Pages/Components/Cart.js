import React, { Component } from "react";
import "./Cart.scss";

class Cart extends Component {
  render() {
    return (
      <section className={`Cart ${this.props.visible ? "visible" : ""}`}>
        <div className="cartWrapper">
          <div className="cartHeader">
            <p>
              Your Cart<span> (0) </span>
            </p>
            <button onClick={this.props.openCart}>
              <img src="https://i.ibb.co/C7Zh1zK/close.png"></img>
            </button>
          </div>
          <div className="cartEmpty">
            <p>YOUR</p>
            <p>CART IS</p>
            <p>EMPTY</p>
          </div>
          <div className="cartBtn">
            <button>GO BACK TO SHOPPING</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
