import React, { Component } from "react";
import "./Cart.scss";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      cart: []
    };
  }

  render() {
    const { count } = this.state;

    return (
      <section className="Cart visible">
        <div className="cartWrapper">
          <div className="cartHeader">
            <p>Your Cart ({count})</p>
            <button onClick={this.props.handleCart}>
              <img alt="close" src="https://i.ibb.co/C7Zh1zK/close.png"></img>
            </button>
          </div>
          <div className="cartList">
            <ul>
              {this.props.products.map(product => (
                <li>
                  <div>
                    <img alt="" src={this.props.products.productImg} />
                    <p>{this.props.name}</p>
                    <p>{count}</p>
                    <p>{this.props.products.price}</p>
                    <button>delete</button>
                  </div>
                </li>
              ))}
            </ul>
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
