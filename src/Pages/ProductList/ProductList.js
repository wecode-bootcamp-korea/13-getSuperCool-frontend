import React from "react";
import Menubar from "./Components/Menubar/Menubar";
import Product from "./Components/Product/Product"
import "./ProductList.scss";

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      category_id: [],
      apply_on_id: [],
    }
  }

  test1 = (category) => {
    const {category_id} = this.state;
    const result = category_id.includes(category);
    if (result) {
      const returnArray = category_id.filter((cat) => cat !== category);
      return returnArray;
    }
    return [...category_id, category];
  }

  test2 = (category) => {
    const {apply_on_id} = this.state;
    const result = apply_on_id.includes(category);
    if (result) {
      const returnArray = apply_on_id.filter((cat) => cat !== category);
      return returnArray;
    }
    return [...apply_on_id, category];
  }

  getCategories = (category) => {
    this.setState({category_id: this.test1(category)});
  }

  getApplies = (category) => {
    this.setState({apply_on_id: this.test2(category)});
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json",)
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
        <section>
          <h1>SHOP</h1>
          <p>(18 PRODUCT)</p>
        </section>
        <main>
          <Menubar
            getCategories = {this.getCategories}
            getApplies = {this.getApplies}

          />
          <div className="ProductsContainer">
            {products.map(
              ({
                id,
                modelImg,
                iconImg,
                name,
                productImg,
                price,
              }) => (
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
      </div>
    )
  }
}

export default ProductList;