import React, { Component } from "react";
import Product from "../ProductList/Components/Product/Product";
import Slider from "react-slick";
import "./Main.scss";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Components/Footer/Footer"
import Nav from "../Components/Nav/Nav";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      product_list: []
    };
  }

  next = () => {
    this.slider.slickNext();
  };

  prev = () => {
    this.slider.slickPrev();
  };

  componentDidMount() {
    fetch("http://10.58.7.186:8000/shop")
      .then(res => res.json())
      .then(res => {
        this.setState({
          product_list: res.product_list
        });
      });
  }

  coupon = () => {};

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true
    };
    const itemSlick = {
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="Main">
        <Nav />
        <Slider {...settings}>
          <img
            id="firstImg"
            src="https://i.ibb.co/yX1K3mP/slick-3.jpg"
            alt="first"
          />
          <img
            id="secondImg"
            src="https://i.ibb.co/MPpGLC0/slick-1.jpg"
            alt="second"
          />
          <img
            id="thirdImg"
            src="https://i.ibb.co/2y62XJx/slick-2.jpg"
            alt="third"
          />
        </Slider>

        <div className="shop">
          <p><Link className="link" to={"/ProductList"}>SHOP NOW</Link></p>
        </div>
        <div className="productSection">
          <p>YOUR NEW</p>
          <p>EVERY DAY</p>
          <p>BASICS!</p>
          <div className="items">
            <Slider ref={c => (this.slider = c)} {...itemSlick}>
              {this.state.product_list && this.state.product_list.map(
                ({ product_id, model_image, name, product_image, price }) => (
                  <Product
                    id={product_id}
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
          <div className="shopNow"><Link className="link" to={"/ProductList"}>shop now</Link></div>
        </div>
        <div className="NewsletterSection">
          <img src="https://i.ibb.co/myqMxG7/annie-spratt-j-Crft-LHe3ec-unsplash.jpg" alt="콜라주 사진" />
          <div>
            <p>SUBSCRIBE</p>
            <p>TO THE</p>
            <p>NEWSLETTER</p>
            <form>
              <input type="text" placeholder="EMAIL"></input>
              <button>ok</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
