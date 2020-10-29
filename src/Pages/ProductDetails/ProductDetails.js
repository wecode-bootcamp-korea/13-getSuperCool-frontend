import React from "react";
import "./ProductDetails.scss";
import LeftSlider from "./ComponentYH/LeftSlider/LeftSlider";
import RightSlider from "./ComponentYH/RightSlider/RightSlider";
import ReviewList from "./ComponentYH/ReviewList/ReviewList";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Components/Nav/Nav";

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      pairData:[],
      alsoLike:[],
      colorsData: [],
      colorData:[],
      productData:[],
      colorID: 1
    };
  }

  componentDidMount() {
    fetch("/data/data.json", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res, "hahah");
        this.setState({
          pairData: res.pair_with,
          alsoLike: res.you_may_also_like,
          colorsData: res.color_list,
          colorData: res.color_list[0],
          productData: res.product_info[0],
        });
      });
  }

  componentDidUpdate(preProps) {
    if(preProps.match.params.id !== this.props.match.params.id){
      fetch("/data/data.json", {
        method: "GET"
      })
        .then(res => res.json())
        .then(res => {
          console.log(res, "hahah");
          this.setState({
            pairData: res.pair_with,
            alsoLike: res.you_may_also_like,
            colorsData: res.color_list,
            colorData: res.color_list[this.props.match.params.id-1],
            productData: res.product_info[0],
          });
        });
    }
  }

  getColorID = (id)=> {
    this.setState({
      colorID: id,
    })
  }

  render() {
    const { pairData, alsoLike, colorsData, colorData, productData }=this.state;

    return (
      <div className="ProductDetails">
        <Nav />
        <section className='Description'>
          <div className='Leftside'>
            {/* { false ? <LeftSlider/> : <RightSlider/>} */}
            <LeftSlider
              bg1={colorData&&colorData.detail1_image} 
              bg2={colorData&&colorData.detail2_image} 
              bg3={colorData&&colorData.model_image} 
              product={colorData&&colorData.product_image} 
            />
          </div>
          <div className='Rightside'>
            <RightSlider
              handleLeft={(e) =>
                this.props.history.push(
                  `/ProductDetails/${+e.target.innerHTML}`
                )
              }
              productData={productData}
              contains={productData&&productData.contains}
              description={productData&&productData.description}
              goodToKnow={productData&&productData.good_to_know}
              name={productData&&productData.name}
              price={productData&&productData.price}
              size={productData&&productData.size}
              superTip={productData&&productData.super_tip}
              colorsData={colorsData}  pairData={pairData}
            />
          </div>
        </section>
        <section className='YouMayAlsoLike'>
          {alsoLike&&alsoLike[0]&&alsoLike[0].name}
        </section>
        <section className='ReviewList'>
          <ReviewList />
        </section>
      </div>
    );
  }
}

export default ProductDetails;
