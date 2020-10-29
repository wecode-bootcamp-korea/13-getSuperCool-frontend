import React, { Component } from "react";
import "./Cart.scss";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    const { count } = this.state;
    const { products } = this.props;
    console.log("prd", products);
    return (
      <section className="Cart visible">
        <div className="cartContainer">
          <section className="cartHeader">
            <p>Your Cart ({count})</p>
            <button onClick={this.props.handleCart}>
              <img alt="close" src="https://i.ibb.co/C7Zh1zK/close.png"></img>
            </button>
          </section>
          <div className="cartBodyWrapper">
            <section className="cartListContainer">
              <ul className="cartList">
                {products.map(product => (
                  <li className="itemContainer">
                    <div className="itemDetailsWrapper">
                      <div className="imageContainer">
                        <img src={product.productImg} alt={product.name} />
                      </div>
                      <div className="itemDetails">
                        <span>{product.name}</span>
                        <div className="itemCounter">
                          <button>-</button>
                          <div>1</div>
                          <button>+</button>
                        </div>
                        <div className="price">
                          <span>{product.price}</span>
                        </div>
                        <button className="deleteBtn">DELETE</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="upsellProductsContainer">
              <p>
                <span>You may also like</span>
              </p>
              <div className="upsellProducts">
                <div className="productCard">
                  <div className="upsellPhotoWrapper">
                    <a>
                      <img src="https://i.ibb.co/265NLSH/olia-gozha-9-A-pe-Gr-Sb-Zc-unsplash.jpg" />
                    </a>
                  </div>
                  <p>product name here</p>
                </div>
                <div className="productCard">
                  <div className="upsellPhotoWrapper">
                    <a>
                      <img src="https://i.ibb.co/jLLxFxf/ramez-e-nassif-Tz8s-KLv-SV08-unsplash.jpg" />
                    </a>
                  </div>
                  <p>product name here</p>
                </div>
                <div className="productCard">
                  <div className="upsellPhotoWrapper">
                    <a>
                      <img src="https://i.ibb.co/265NLSH/olia-gozha-9-A-pe-Gr-Sb-Zc-unsplash.jpg" />
                    </a>
                  </div>
                  <p>product name here</p>
                </div>
              </div>
            </section>
            <section className="continueToPayment">
              <div className="totalPrice">
                <p>TOTAL</p>
                <p>19.00€</p>
              </div>
              <div className="cartBtn">
                <button>Continue to Payment</button>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
export default Cart;
