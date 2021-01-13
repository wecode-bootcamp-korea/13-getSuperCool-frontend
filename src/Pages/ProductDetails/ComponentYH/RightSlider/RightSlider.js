import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./RightSlider.scss";
import Shipping from "./Shipping";
import Description from "./Description";
import Ingredients from "./Ingredients";
import Parallax from "react-rellax";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";




class RightSlider extends React.Component {

  constructor(){
    super();
    this.state = {
      activeTab: 2,
      data:[],
      count: 1,
      totPrice: 0,
      likes: 0,
      selected:"",
      show:false,
    };
  }

  handleColor = (e) => {
    this.props.handleLeft(e)
    // this.setState({show:!this.state.show})
  }

  handleIncrement = () => {
    const { count } = this.state;
    const { price } = this.props;

    this.setState({
      count : count + 1,
      totPrice: (count+1)*(price),
    })
  }

  handleDecrement = ()=> {
    const { count } = this.state;
    const { price } = this.props;

    if(count>1){
      this.setState({
        count: count -1,
        totPrice: (count-1)*(price),
      })
    } else {
      return 
    }
  }

  handleLikes = (e) => {
    e.preventDefault();
    alert(`${this.props.name}을 좋아해!`);
    this.setState({
      likes: this.state.likes + 1
    })}

  handleClick = (id) => {
    this.setState({ activeTab: id });
  };

  render(){
    const { count, totPrice, activeTab } = this.state;
    const { name, description, size, goodToKnow, contains, colorsData, price, pairData } = this.props;
    const content = {
      1: <Description description={description} />,
      2: <Ingredients size={size} goodToKnow={goodToKnow} contains={contains} />,
      3: <Shipping />,
    };
    return(
      <Parallax speed={4}>

        <div className='RightSlider'>
          <div onClick={this.handleClick} className='ProductName'>
            <p>
              {name}
            </p>
          </div>
          <div className='Details'>
            <ul className="tabContainer">
              <li onClick={()=>this.handleClick(1)}className="tabTitle">description</li>
              <li onClick={()=>this.handleClick(2)} className="tabTitle">notes&ingredients</li>
              <li onClick={()=>this.handleClick(3)} className="tabTitle">shipping&returns</li>
            </ul>
            <div className='contents'>
              {content[activeTab]}
            </div>
          </div>
          <div className='AddToCart'>
            <div className={colorsData[0]&&colorsData[0].color_name?"ColorSelection":"None"}>
              {colorsData.map(color => {
                return (
                  <div className="button">
                    <button
                      onClick={this.handleColor}
                      className={color.color_name}
                    >
                      {color.color_id}
                    </button>
                    <span>{color.color_name}</span>
                  </div>
                );
              })}
            </div>
            <div className='Wrapper'>
              <div className='Adding'>
                <button onClick={this.handleDecrement}>-</button>
                <div>{count}</div>
                <button onClick = {this.handleIncrement}>+</button>
              </div>
              <button className='AddToCart'>{totPrice===0?price:totPrice}<span>.00€-ADD TO CART</span></button>
              <div onClick={this.handleLikes}className='Likes'>&hearts;</div>
            </div>
            <div className='Subscribe'>
              <div className="marquee">
                <div>
                  <span>THE NEWSLETTER  ·  FREE SHIPPING ON ORDERS OVER 34€   ·  10% DISCOUNT IF YOU SUBSCRIBE THE NEWSLETTER  ·  FREE SHIPPING ON ORDERS OVER 34€   ·  10% DISCOUNT IF YOU SUBSCRIBE </span>
                  <span>THE NEWSLETTER  ·  FREE SHIPPING ON ORDERS OVER 34€   ·  10% DISCOUNT IF YOU SUBSCRIBE  </span>
                </div>
              </div> 
            </div>
            <div className='Philosophy'>
              <div className='Humane'>
                <img className='Humane' alt='Humane'src='https://i.ibb.co/0X07wRq/Image-from-i-OS-2.jpg'></img>
                <p>Humane</p>
              </div>
              <div className='Vegan'>
                <img className='Vegan' alt='Vegan' src='https://i.ibb.co/b3Yz4Ff/Image-from-i-OS-1.jpg'></img>
                <p>Vegan</p>
              </div>
              <div className='Inclusive'>
                <img className='Inclusive' alt='Inclusive' src='https://i.ibb.co/RYCT9W7/Image-from-i-OS.jpg'></img>
                <p>Inclusive</p>
              </div>
            </div>
          </div>
          <div className='PairWith'>
            <h3>Pair With</h3>
            <div className='ProductList'>
              {pairData.map(product=>{
                return(
                  <>
                    <div className={product.product_id}>
                      <a href='http://www.naver.com'>
                        <img alt='product' src={product.product_image}></img>
                        <p>{product.name}</p>
                        <div>{product.price}.00<span>€</span></div>
                      </a>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}

export default RightSlider;
