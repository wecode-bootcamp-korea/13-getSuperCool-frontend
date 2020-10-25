import React, { Component } from "react";
import Slider from "react-slick";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Main extends Component {
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
    return (
      <div className="Main">
        <Slider {...settings}>
          <img
            id="first"
            src="https://images.ctfassets.net/vnxry7jc7f2k/3SBQaVgfnCvM6ALvpyYt2h/6dba0f1d03de947b436b8aa57c7ead30/slider-01.jpg?w=1800&h=1013&q=80&fm=webp"
          ></img>
          <img
            id="second"
            src="https://images.ctfassets.net/vnxry7jc7f2k/1rJNXGIpDwniKyhAlBnRVM/9cfc8df2da07ebf13cb3229842820ab8/slider_applicazione.jpg?w=1920&h=1080&q=80&fm=webp"
          ></img>
          <img
            id="third"
            src="https://images.ctfassets.net/vnxry7jc7f2k/5RpJJJgujK6rFOlN0ljzi7/06352b48f4acafa52500299cb6475299/leggera_SLIDER_MOOD.jpg?w=1920&h=1080&q=80&fm=webp"
          ></img>
        </Slider>
        <div className="shop">
          <p>SHOP NOW</p>
        </div>
        <div class="marquee">
          <div>
            <span>
              •FREE SHIPPING ON ORDERS OVER 34€ • 10% DISCOUNT IF YOU SUBSCRIBE
              TO THE NEWSLETTER
            </span>
            <span>
              •FREE SHIPPING ON ORDERS OVER 34€ • 10% DISCOUNT IF YOU SUBSCRIBE
              TO THE NEWSLETTER
            </span>
          </div>
        </div>
        <div className="Section2">
          <p>YOUR NEW</p>
          <p>EVERY DAY</p>
          <p>BASICS!</p>
          <div className="ProductList"></div>
        </div>
        <div className="Section3">
          <img src="https://images.ctfassets.net/vnxry7jc7f2k/3F6iB8kJUfwHHUeiFVMmVW/a7bdf792f2342d55ae093f4d033b66dc/per_sito-02.jpg?w=1600&h=1600&q=80&fm=webp" />
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
      </div>
    );
  }
}

export default Main;
