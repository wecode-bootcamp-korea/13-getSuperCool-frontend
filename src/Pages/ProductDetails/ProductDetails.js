import React from "react";
import "./ProductDetails.scss";
import Footer from "../Components/Footer/Footer"
import LeftSlider from "./ComponentYH/LeftSlider/LeftSlider";
import RightSlider from "./ComponentYH/RightSlider/RightSlider";
import ReviewList from "./ComponentYH/ReviewList/ReviewList";
import Product from "../ProductList/Components/Product/Product";
import Nav from "../Components/Nav/Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Parallax from "react-rellax";

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef()
    this.state = {
      comment: "",
      pairData:[],
      alsoLike:[],
      colorsData: [],
      colorData:[],
      productData:[],
      colorID: 1,
      scrollTop: 0,
    };
  }

  componentDidMount() {
    fetch(`../data/data.json/shop/${this.props.match.params.id}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
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
    if(preProps.match.params["color"] !== this.props.match.params["color"]){
      //fetch(`../data/YH.json/${this.props.match.params.id}`)
      fetch("../data/YH.json")
        .then(res => res.json())
        .then(res => {
          this.setState({
            pairData: res.pair_with,
            alsoLike: res.you_may_also_like,
            colorsData: res.color_list,
            colorData: res.color_list[this.props.match.params["color"]-1],
            productData: res.product_info[0],
          });
        });
    }
    console.log(this.state.colorData, "haha", this.state.colorsData)
  }

  onScroll = () => {
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    this.setState({
      scrollTop: scrollTop
    })
  }

  getColorID = (id)=> {
    this.setState({
      colorID: id,
    })
  }

  next = () => {
    this.slider.slickNext();
  };

  prev = () => {
    this.slider.slickPrev();
  };

  render() {
    
    const itemSlick = {
      slidesToShow: 4,
      slidesToScroll: 1
    };
    const { pairData, alsoLike, colorsData, colorData, productData }=this.state;
    console.log(this.state.scrollTop)
    return (
      <div 
        ref={this.myRef}
        onScroll={this.onScroll}
        className="ProductDetails">
        <Nav />
        <section className='Description'>
          <div className='Leftside'>
            {colorData&&
            <LeftSlider
              scroll={this.state.scrollTop}
              bg1={colorData.detail1_image} 
              bg2={colorData.detail2_image} 
              bg3={colorData.model_image} 
              product={colorData.product_image} 
            />}
          </div>
          <div className='Rightside'>
            <Parallax speed={-8}>
              {productData&&
            <RightSlider
              handleLeft={(e) =>
                this.props.history.push(
                  `/shop/${this.props.match.params.id}/${+e.target.innerHTML}`
                )
              }
              productData={productData}
              contains={productData.contains}
              description={productData.description}
              goodToKnow={productData.good_to_know}
              name={productData.name}
              price={productData.price}
              size={productData.size}
              superTip={productData.super_tip}
              colorsData={colorsData}  pairData={pairData}
            />}
            </Parallax>
          </div>
        </section>
        <section className='YouMayAlsoLike'>
          <div className="productSection">
            <p>YOUR MAY</p>
            <p>ALSO LIKE</p>
            <div className="items">
              <Slider ref={c => (this.slider = c)} {...itemSlick}>
                {alsoLike && alsoLike.map(
                  ({model_image, name, price, id, product_image }) => (
                    <Product
                      id={id}
                      modelImg={model_image}
                      iconImg="https://i.ibb.co/wS6dvTj/icontrans.png"
                      name={name}
                      productImg={product_image}
                      price={price}
                    />
                  )
                )}
              </Slider>
              <div className="arrow">
                <img
                  className="arrowLeft"
                  onClick={this.prev}
                  src="https://i.ibb.co/BGL1sk3/arrow-left.png"
                  alt=""
                />
                <img
                  className="arrowRight"
                  onClick={this.next}
                  src="https://i.ibb.co/KXQm6Q2/arrow-right.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className='ReviewList'>
          <ReviewList />
        </section>
        <section className='Footer'>
          <Footer />
        </section>
      </div>
    );
  }
}

export default ProductDetails;
