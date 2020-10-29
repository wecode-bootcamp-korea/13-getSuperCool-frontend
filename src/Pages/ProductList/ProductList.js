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
      searchInput: "",
      filteredProducts: [],
      filterdApplies: [],
      products: [],
      cartItems: [],
      visible: false,
      categoryOption: [],
      applyOnOption: []
    };
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

  handleFiltered = () => {
    const { categoryOption, applyOnOption, products } = this.state;

    if (categoryOption.length > 0 && !applyOnOption.length) {
      const filterdApplies = products.filter(product =>
        categoryOption.includes(product.category)
      );
      this.setState({
        filterdApplies
      });
    } else if (!categoryOption.length && applyOnOption.length > 0) {
      const filterdApplies = products.filter(product => {
        const check = el => applyOnOption.includes(el);
        return product.apply_on.some(check);
      });
      this.setState({
        filterdApplies
      });
    } else if (!categoryOption.length && !applyOnOption.length) {
      this.setState({
        filterdApplies: products
      });
    } else {
      const filterdApplies = products
        .filter(product => categoryOption.includes(product.category))
        .filter(product => {
          const check = el => applyOnOption.includes(el);
          return product.apply_on.some(check);
        });
      this.setState({
        filterdApplies
      });
    }
  };

  getCategories = name => {
    const { categoryOption } = this.state;
    const isIncluded = categoryOption.includes(name);
    this.setState(
      {
        categoryOption: isIncluded
          ? categoryOption.filter(selected => selected !== name)
          : [...categoryOption, name]
      },
      this.handleFiltered
    );
  };

  getApplies = name => {
    const { applyOnOption } = this.state;
    const isIncluded = applyOnOption.includes(name);
    this.setState(
      {
        applyOnOption: isIncluded
          ? applyOnOption.filter(selected => selected !== name)
          : [...applyOnOption, name]
      },
      this.handleFiltered
    );
  };

  handleSearchBox = () => {
    const { products, searchInput } = this.state;
    this.setState({
      filterdApplies: products.filter(product => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      })
    });
  };

  handleDefaultSearch = () => {
    this.setState({
      searchInput: ""
    });
  };

  handleChange = e => {
    this.setState(
      {
        searchInput: e.target.value
      },
      this.handleSearchBox
    );
  };

  componentDidMount() {
    fetch("http://10.58.7.186:8000/shop", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          products: res.product_list,
          filteredProducts: res.product_list,
          filterdApplies: res.product_list
        });
      });
  }

  render() {
    const {
      visible,
      cartItems,
      filterdApplies,
      searchInput,
    } = this.state;

    return (
      <div className="ProductList">
        <Nav />
        <section>
          <h1>SHOP</h1>
          <p>(18 PRODUCT)</p>
        </section>
        <main>
          <Menubar
            getCategories={this.getCategories}
            getApplies={this.getApplies}
            handleChange={this.handleChange}
            searchInput={searchInput}
            handleDefaultSearch={this.handleDefaultSearch}
            handleSearchBox={this.handleSearchBox}
          />
          <div className="ProductsContainer">
            {filterdApplies.map(
              ({
                category,
                apply_on,
                color_options,
                product_id,
                name,
                model_image,
                product_image,
                price
              }) => (
                <Product
                  category={category}
                  apply_on={apply_on}
                  id={product_id}
                  modelImg={model_image}
                  name={name}
                  productImg={product_image}
                  price={price}
                  showCart={this.showCart}
                  hideCart={this.hideCart}
                  addCartProduct={this.addCartProduct}
                />
              )
            )}
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
    );
  }
}
export default ProductList;
