import React from "react";
import "./Product.scss";

class Product extends React.Component {
  render() {
    const { id, name, productImg, price } = this.props;

    return (
      <div id={id} className="Product">
        <div className="modelPhoto">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e217b354-2019-41ad-988a-935b8d48b89b/jessica-felicio-_cvwXhGqG-o-unsplash.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201021T083039Z&X-Amz-Expires=86400&X-Amz-Signature=4e69686ca39dcd6cf1d110c92e00868f5a5cd2217910aa82320e16546f39f0c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22jessica-felicio-_cvwXhGqG-o-unsplash.jpg%22" alt="modelPhoto" />
        </div>
        <img className="logoIcon" src='https://i.ibb.co/YXNqJQM/logoIcon.png' alt="logoIcon" />
        <img src={productImg} alt={name}/>
        <span>
          <div>{name}</div>
          <div>{price}</div>
        </span>
        <button>ADD TO CART</button>
      </div>
    )
  }
}

export default Product;