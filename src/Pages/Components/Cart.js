import React, { Component } from "react";
import "./Cart.scss";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      cartList: []
    };
  }

  componentDidMount = () => {
    this.setState({ cartList: this.props.cartItems });
  };

  deleteItem = id => {
    let filteredItems = this.state.cartList.filter(item => item.id !== id);
    this.setState({ cartList: filteredItems });
  };

  render() {
    const { count, cartList } = this.state;

    return (
      <section className="Cart visible">
        <div className="cartContainer">
          <section className="cartHeader">
            <p>Your Cart ({count})</p>
            <button onClick={this.props.hideCart}>
              <img alt="close" src="https://i.ibb.co/C7Zh1zK/close.png" />
            </button>
          </section>
          <div className="cartBodyWrapper">
            <section className="cartListContainer">
              {cartList.length !== 0 && (
                <ul className="cartList">
                  {cartList.map(product => (
                    <li className="itemContainer">
                      <div className="itemDetailsWrapper">
                        <div className="imageContainer">
                          <img src={product.product_image} alt={product.name} />
                        </div>
                        <div className="itemDetails">
                          <span>{product.name}</span>
                          <div className="itemCounter">
                            <button>-</button>
                            <div>{count}</div>
                            <button>+</button>
                          </div>
                          <div className="price">
                            <span>{product.price}</span>
                          </div>
                          <button
                            className="deleteBtn"
                            onClick={() => this.deleteItem(product.id)}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
            <section className="upsellProductsContainer">
              <p>
                <span>You may also like</span>
              </p>
              <div className="upsellProducts">
                <div className="productCard">
                  <div className="upsellPhotoWrapper">
                    <a>
                      <img src="https://i.ibb.co/265NLSH/olia-gozha-9-A-pe-Gr-Sb-Zc-unsplash.jpg" alt="random1"/>
                    </a>
                  </div>
                  <p>product name here</p>
                </div>
                <div className="productCard">
                  <div className="upsellPhotoWrapper">
                    <a>
                      <img src="https://i.ibb.co/jLLxFxf/ramez-e-nassif-Tz8s-KLv-SV08-unsplash.jpg" alt="random1"/>
                    </a>
                  </div>
                  <p>product name here</p>
                </div>
                <div className="productCard">
                  <div className="upsellPhotoWrapper">
                    <a>
                      <img src="https://i.ibb.co/265NLSH/olia-gozha-9-A-pe-Gr-Sb-Zc-unsplash.jpg" alt="random1"/>
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
