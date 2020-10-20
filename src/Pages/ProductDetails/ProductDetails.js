import React from "react";
// import Logo from "../logo_text.png";
import "./ProductDetails.scss";


class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
    };
  }

  render() {
    return (
      <div className="ProductDetails">
        <section className='Description'>
          <div className='LeftSlider'>
            hahaha
          </div>
          <div className='RightSlider'>
            hahahaha
          </div>
        </section>
        <section className='YouMayAlsoLike'>
          Product Recommendation
        </section>
        <section className='ReviewList'>
          jafjdjfkahf
        </section>
      </div>
    );
  }
}

export default ProductDetails;
