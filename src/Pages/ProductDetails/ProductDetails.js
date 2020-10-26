import React from "react";
import "./ProductDetails.scss";

import LeftSlider from "./ComponentYH/LeftSlider";
import RightSlider from "./ComponentYH/RightSlider";
import ReviewList from "./ComponentYH/ReviewList";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



class ProductDetails extends React.Component {
  constructor() {
    console.log("constructor1");
    super();
    this.state = {
      comment: "",
      data:[],
    };
    console.log("constructor2");
  }

  render() {
    return (
      <div className="ProductDetails">
        <section className='Description'>
          <div className='Leftside'>
            {/* { false ? <LeftSlider/> : <RightSlider/>} */}
            <LeftSlider/>
          </div>
          <div className='Rightside'>
            <RightSlider />
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
