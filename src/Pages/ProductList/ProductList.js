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

  handleCart = () => {
    console.log("clicked");
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { products, visible } = this.state;

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
              {products.map(
                ({ id, modelImg, iconImg, name, productImg, price }) => (
                  <Product
                    key={id}
                    modelImg={modelImg}
                    iconImg={iconImg}
                    name={name}
                    productImg={productImg}
                    price={price}
                  />
                )
              )}
            </div>
          </main>
          <div>포토박스</div>
          {visible && <Cart handleCart={this.handleCart} />}
          {/* <Footer /> */}
        </div>
      </>
    );
  }
}

export default ProductList;
