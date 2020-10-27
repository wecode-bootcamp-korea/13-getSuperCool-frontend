import React from "react";
import { Route, Switch } from "react-router-dom";
import "./RightSlider.scss";

class RightSlider extends React.Component {

  constructor(){
    super();
    this.state = {
      data:[],
      count: 1,
      price: 19,
      totPrice: 19,
      likes: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count : this.state.count + 1,
      totPrice: (this.state.count+1)*(this.state.price),
    })
  }

  handleDecrement = ()=> {
    if(this.state.count>1){
      this.setState({
        count: this.state.count -1,
        totPrice: (this.state.count-1)*(this.state.price),
      })
    } else {
      return 
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render(){
    const {data} = this.props;
    const {count, price, totPrice} = this.state;
    return(
      <div className='RightSlider'>
        <div onClick={this.handleClick} className='ProductName'>
          <h1>
          ALL(B)RIGHT
          </h1>
          <span>HIGHLIGHTER</span>
        </div>
        <div className='Details'>
          <ul className="tabContainer">
            <li className="tabTitle">description</li>
            <li className="tabTitle">notes&ingredients</li>
            <li className="tabTitle">shipping&returns</li>
          </ul>
          <div className='shippinReturns'>
            <ul>
              <li>We ship throughout Europe and the UK;</li>
              <li><span>We speeded up delivery times,</span> check your Country <span>here.</span></li>
              <li>Our boxes are 100% recyclable, FSC and Green Dot certified.</li>
              <li><span>30 days return period;</span></li>
              <li>We accept Credit/Debit card, PayPal and Bank Transfer;</li>
              <li><span>FAQs.</span>For more information, visit our </li>
            </ul>
          </div>
        </div>
        <div className='AddToCart'>
          <div className='ColorSelection'>
            <button className='red'></button>
            <span>RED</span>
            <button className='pink'></button>
            <button className='coral'></button>
          </div>
          <div className='Wrapper'>
            <div className='Adding'>
              <button onClick={this.handleDecrement}>-</button>
              <div>{count}</div>
              <button onClick = {this.handleIncrement}>+</button>
            </div>
            <button className='AddToCart'>{totPrice}<span>.00€-ADD TO CART</span></button>
            <div className='Likes'>&hearts;</div>
          </div>
          <div className='Subscribe'>
            <p>Awesome!!! Subscribe To News Letter!!!</p>
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
            <div className='product1'>
              <a href='http://www.naver.com'>
                <img alt='product' src='https://images.ctfassets.net/vnxry7jc7f2k/7EtX4lxmITWCGLCDU6X3Re/4eedd4a78a76f91c81f3bdc44a3c2250/03_SUPERFLUID_200421_0005_-_5-4.png?w=150&h=431&q=80&fm=webp'></img>
                <p>superbalm| lip balm</p>
                <div>14.00<span>€</span></div>
              </a>
            </div>
            <div className='product2'>
              <a href='http://www.naver.com'>
                <img alt='product' src='https://images.ctfassets.net/vnxry7jc7f2k/7jlZKvTNGxa1ubfV9nT4GU/2065bdd2cf494fe2bc31587849253e04/04_superfluid_200421_0036_mauve_copy.png?w=150&h=582&q=80&fm=webp'></img>
                <p>combo goals|lip'n' cheek</p>
                <div>19.00<span>€</span></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MAPPING_OBJ = {
  // 1: <First/>,
  // 2: <Second/>,
  // 3: <Third/>,
}

const MAPPING_MENU = ["First", "Second", "Third"];

export default RightSlider;
{/* <div className='wrapper'>
  <ul className='tabs'>
    {MAPPING_MENU.map(
      (menu, idx) => (
        <li onClick={()=> this.OpenPage(idx+1)}>{menu}</li>
      )
    )}
  </ul>
  <div className='Contents'>
    {MAPPING_OBJ[activeId]}
  </div>
</div> */}