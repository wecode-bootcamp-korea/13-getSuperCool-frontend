import React from "react";
import Menubar from "./Components/Menubar/Menubar";
import Product from "./Components/Product/Product"
import "./ProductList.scss";

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          products: res.products,
        });
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="ProductList">
        {/* <Nav /> */}
        <section>
          <h1>SHOP</h1>
          <p>(18 PRODUCT)</p>
        </section>
        <main>
          <Menubar />
          <div className="ProductsContainer">
            {products.map(
              ({
                id,
                name,
                productImg,
                price,
              }) => (
                <Product 
                  key={id}
                  name={name}
                  productImg={productImg}
                  price={price}
                />
              )
            )}
          </div>
        </main>
        <div>포토박스</div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default ProductList;