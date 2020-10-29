import React from "react";
import Menubar from "./Components/Menubar/Menubar";
import Product from "./Components/Product/Product"
import Nav from "../Components/Nav/Nav"
import "./ProductList.scss";
class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput : "",
      products: [],
      filteredProducts : [],
      categoryOption: [],
      applyOnOption: [],
    }
  }










  filtered = (item, nowApplies, nowCategory) => {
    const isNowApply = !nowApplies.length ? true : nowApplies.some((part) => item.apply_on.includes(part))
    const isNowCategory = item.category === nowCategory
    return isNowApply && isNowCategory
  }

  // product_list.filter((item) => filtered(item, apply, category))



    getCategories = (name) => {
      const { categoryOption } = this.state
      const isIncluded = categoryOption.includes(name) 
      this.setState({
        categoryOption: isIncluded ? categoryOption.filter((selected) => selected !== name) : [...categoryOption, name],
      });
    }

    getApplies = (name) => {
      const { applyOnOption } = this.state;
      const isIncluded = applyOnOption.includes(name)
      this.setState({
        applyOnOption : isIncluded ? applyOnOption.filter((selected) => selected !== name) : [...applyOnOption, name]
      });
    }








  handleSearchBox = () => {
    const { products, searchInput } = this.state;
    this.setState({
      filteredProducts : products.filter((product) => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      })
    })
  }
  handleDefaultSearch = () => {
    this.setState({
      searchInput : "",
    })
  }
  // http://10.58.7.149:8000/shop
  componentDidMount() {
    fetch("/data/data.json", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {this.setState({
        products : res.product_list,
        filteredProducts : res.product_list,
      })
      });
  }
  handleChange = (e) => {
    this.setState({
      searchInput : e.target.value
    }, ()=> this.handleSearchBox())
  }
  render() {
    const { filteredProducts , searchInput } = this.state;
    return (
      <div className="ProductList">
        <Nav />
        <section>
          <h1>SHOP</h1>
          <p>(18 PRODUCT)</p>
        </section>
        <main>
          <Menubar
            getCategories = {this.getCategories}
            getApplies = {this.getApplies}
            handleChange = {this.handleChange}
            searchInput = {searchInput}
            handleDefaultSearch = {this.handleDefaultSearch}
            handleSearchBox = {this.handleSearchBox}
          />
          <div className="ProductsContainer">
            {filteredProducts.map(
              ({
                category,
                apply_on,
                color_options,
                product_id,
                name,
                model_image,
                product_image,
                price,
              }) => (
                <Product
                  category={category}
                  apply_on={apply_on}
                  key={product_id}
                  modelImg={model_image}
                  name={name}
                  productImg={product_image}
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