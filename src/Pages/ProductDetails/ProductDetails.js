import React from "react";
import "./ProductDetails.scss";
import LeftSlider from "./ComponentYH/LeftSlider/LeftSlider";
import RightSlider from "./ComponentYH/RightSlider/RightSlider";
import ReviewList from "./ComponentYH/ReviewList/ReviewList";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      data:{},
    };
  }

  componentDidMount() {
    fetch("/data/data.json", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          data: res["products"][0],
        });
      });
  }

  render() {
    console.log("hwhwhw", this.state.data)
    console.log("mwah", this.state.data)
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
