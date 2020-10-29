import React from "react";
import logoImg from "./logoText.svg";
import "./Product.scss";

class Product extends React.Component {
  render() {
    
    const { showCart, product } = this.props;
    return (
      <div id={product.id} className="Product">
        <div className="productThumbnail">
          <img src={product.modelImg} alt={product.modelImg} />
          <img className="logoText" src={logoImg} alt="logoImg" />
        </div>
        <img className="logoIcon" src={product.iconImg} alt="logoImg" />
        <img
          className="productImg"
          src={product.productImg}
          alt={product.name}
        />
        <span>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </span>
        <button onClick={() => showCart(product)}>ADD TO CART</button>
      </div>
    );
  }
}

export default Product;
