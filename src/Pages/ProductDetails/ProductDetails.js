import React from "react";
// import Logo from "../logo_text.png";
import "./ProductDetails.scss";

import LeftSlider from "./ComponentYH/LeftSlider";
import RightSlider from "./ComponentYH/RightSlider";
import ReviewList from "./ComponentYH/ReviewList";


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
            <LeftSlider/>
          </div>
          <div className='RightSlider'>
            <RightSlider/>
          </div>
        </section>
        <section className='YouMayAlsoLike'>
          
        </section>
        <section className='ReviewList'>
          <ReviewList />
        </section>
      </div>
    );
  }
}

export default ProductDetails;
