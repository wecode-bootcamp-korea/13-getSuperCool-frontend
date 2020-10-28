import React, { Component } from "react";
import "./Cart.scss";

class Cart extends Component {
  render() {
    console.log("Cart", this.props.visible);
    return (
      <section className={this.props.visible ? "Cart visible" : "Cart"}>
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
