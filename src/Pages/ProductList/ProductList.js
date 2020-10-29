import React from "react";
import Nav from "../Components/Nav/Nav";
import Menubar from "./Components/Menubar/Menubar";
import Product from "./Components/Product/Product";
import Cart from "../Components/Cart";
import "./ProductList.scss";

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      cartItems: [],
      visible: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          products: res.products
        });
      });
  }

  showCart = product => {
    this.setState(
      {
        visible: true
      },
      () => this.addCartProduct(product)
    );
  };

  hideCart = () => {
    this.setState({
      visible: false
    });
  };

  addCartProduct = product => {
    this.setState({
      cartItems: this.state.cartItems.concat([product])
    });
  };

  render() {
    const { products, visible, cartItems } = this.state;

    return (
      <>
        <Nav />
        <div className="ProductList">
          <section>
            <h1>SHOP</h1>
            <p>(18 PRODUCT)</p>
          </section>
          <main>
            <Menubar />
            <div className="ProductsContainer">
              {products.map(product => (
                <Product
                  key={product.id}
                  product={product}
                  showCart={this.showCart}
                  hideCart={this.hideCart}
                  addCartProduct={this.addCartProduct}
                />
              ))}
            </div>
          </main>
          <div>포토박스</div>
          {visible && (
            <Cart
              product={this.state.product}
              showCart={this.showCart}
              hideCart={this.hideCart}
              addCartProduct={this.addCartProduct}
              cartItems={cartItems}
            />
          )}
        </div>
      </>
    );
  }
}

export default ProductList;
