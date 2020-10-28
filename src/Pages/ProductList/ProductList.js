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

    this.setState({
      visible: !this.state.visible,
      products: [{
        "id" : 1,
        "modelImg":"https://files.slack.com/files-pri/TH0U6FBTN-F01D8T4F77U/gettyimages-1272476716.jpg",
        "iconImg" : "https://i.ibb.co/wS6dvTj/icontrans.png",
        "name" : "COMBO GOALS LIP 'N' CHEEK",
        "productImg" : "https://images.ctfassets.net/vnxry7jc7f2k/3GJLJl7dD0yzNt0pzFgqzp/904036e327b01591e5b22ca8485c42dc/04_SUPERFLUID_EYEGEL.png?w=300&h=784&q=80&fm=webp",
        "price" : "16.00$"
      }]
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
                    handleCart={this.handleCart}
                  />
                )
              )}
            </div>
          </main>
          <div>포토박스</div>
          {visible && <Cart handleCart={this.handleCart} products={products} />}
          {/* <Footer /> */}
        </div>
      </>
    );
  }
}

export default ProductList;
