import React from "react";
import logoImg from "./logoText.svg";
import ColorOptionBox from "../ColorOptionBox/ColorOptionBox";
import { withRouter } from "react-router-dom";
import "./Product.scss";

class Product extends React.Component {
  render() {
    const {
      id,
      modelImg,
      name,
      productImg,
      price,
      showCart,
      product
    } = this.props;

    return (
      <div onClick={() =>
        this.props.history.push(`http://10.58.7.186:8000/shop/${id}`)
      } id={id} className="Product">
        <ColorOptionBox />
        <div className="productThumbnail">
          <img src={modelImg} alt={modelImg} />
          <img className="logoText" src={logoImg} alt="logoImg" />
        </div>
        <img
          className="logoIcon"
          src="https://i.ibb.co/wS6dvTj/icontrans.png"
          alt="logoImg"
        />
        <img className="productImg" src={productImg} alt={name} />

        <span>
          <div>{name}</div>
          <div>
            {price}.00<span>€</span>
          </div>
        </span>
        <button onClick={() => showCart(product)}>ADD TO CART</button>
      </div>
    );
  }
}

export default withRouter(Product);
