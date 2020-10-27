import React, { Component } from "react";
import "./Cart.scss";

class Cart extends Component {
  render() {
    return (
      <section className="Cart">
        <div className="cartWrapper">
          <div className="cartHeader">
            <p>
              Your Cart<span> (0) </span>
            </p>
            <button
              onClick={() => {
                console.log("123");
              }}
            >
              <img src="https://i.ibb.co/C7Zh1zK/close.png"></img>
            </button>
          </div>
          <div className="cartEmpty">
            <p>YOUR</p>
            <p>CART IS</p>
            <p>EMPTY</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
