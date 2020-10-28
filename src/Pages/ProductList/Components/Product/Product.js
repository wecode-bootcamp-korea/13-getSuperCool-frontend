import React from "react";
import logoImg from "./logoText.svg";
import "./Product.scss";

class Product extends React.Component {
  render() {
    // console.log(this.props.visible);
    const {
      id,
      modelImg,
      iconImg,
      name,
      productImg,
      price,
      handleCart
    } = this.props;

    return (
      <div id={id} className="Product">
        <div className="productThumbnail">
          <img src={modelImg} alt={modelImg} />
          <img className="logoText" src={logoImg} alt="logoImg" />
        </div>
        <img className="logoIcon" src={iconImg} alt="logoImg" />
        <img className="productImg" src={productImg} alt={name} />
        <span>
          <div>{name}</div>
          <div>{price}</div>
        </span>
        <button onClick={handleCart}>ADD TO CART</button>
      </div>
    );
  }
}

export default Product;
