/* eslint-disable jsx-a11y/alt-text */
import React, { createRef } from "react";
import "./LeftSlider.scss"

class LeftSlider extends React.Component {
  constructor(){
    super();
    this.back = React.createRef();
    this.state = {
      hah:"fdf"
    };
  }

  // handleScrolling = (e)=>{
  //   if(e.target.getBoundingClientRect()===window.scrollY){
  // this.back.current
  // .window.addEventListener("keydown", ScrollActive())

  // }
  // }

  
  // const translate = document.querySelectorAll(".translate");
  // const big_title = document.querySelector(".big-title");
  // const header = document.querySelector("header");
  // const shadow = document.querySelector(".shadow");
  // const content = document.querySelector(".content");
  // const section = document.querySelector("section");
  // const image_container = document.querySelector(".imgContainer");
  // const opacity = document.querySelectorAll(".opacity");
  // const border = document.querySelector(".border");

  // let header_height = header.offsetHeight;
  // let section_height = section.offsetHeight;

  // window.addEventListener('scroll', () => {
  //     let scroll = window.pageYOffset;
  //     let sectionY = section.getBoundingClientRect();
    
  //     translate.forEach(element => {
  //         let speed = element.dataset.speed;
  //         element.style.transform = `translateY(${scroll * speed}px)`;
  //     });

  //     opacity.forEach(element => {
  //         element.style.opacity = scroll / (sectionY.top + section_height);
  //     })

  //     big_title.style.opacity = - scroll / (header_height / 2) + 1;
  //     shadow.style.height = `${scroll * 0.5 + 300}px`;

  //     content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
  //     image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

  //     border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
  // })

  render(){
    const Back = this.back.current;
    return (
      <div className='Test'>
        <div className='Background'  ref={this.back}>
          <img src='https://images.ctfassets.net/vnxry7jc7f2k/75KxXoiXG08POrUpCljSa9/da632f2b0bd10fdbbcf89d704e07a245/1.jpg?w=1440&h=1800&q=80&fm=webp'>
          </img>
          <img src='https://images.ctfassets.net/vnxry7jc7f2k/1NaxJV9Xc0Ve10F9I7qxdy/d8de24a3af839c8841c77dd2b54a27d6/superfluid_ott1693.jpg?w=1440&h=1800&q=80&fm=webp'></img>
          <img src='https://images.ctfassets.net/vnxry7jc7f2k/2o4pzUml5XvzR4qRhOr25n/2a2b44c768d24cf270e8958e1c6f0e11/3.jpg?w=1440&h=1800&q=80&fm=webp'></img>
        </div>
        <div className='Foreground'>
          <img className='IconEmpty' src='https://i.ibb.co/wS6dvTj/icontrans.png'></img>
          <img onScroll={this.handleScrolling}className='Product' src='https://images.ctfassets.net/vnxry7jc7f2k/7EtX4lxmITWCGLCDU6X3Re/4eedd4a78a76f91c81f3bdc44a3c2250/03_SUPERFLUID_200421_0005_-_5-4.png?w=150&h=431&q=80&fm=webp'></img>
          <img className='IconBlack' src='https://i.ibb.co/XSqfNDt/icon-Black.png'></img>
          <img className='IconBlack' src='https://i.ibb.co/XSqfNDt/icon-Black.png'></img>
          <img className='IconBlack' src='https://i.ibb.co/XSqfNDt/icon-Black.png'></img>

        </div>
      </div>
    )
  }
}

export default LeftSlider;