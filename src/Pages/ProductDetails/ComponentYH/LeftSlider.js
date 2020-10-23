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


  BackgroundScroll = (e) => {
    if(e.target.clientHeight === window.outerHeight){
      this.back.current.style.overflow = "scroll"
    }
  }

  render(){
    const Back = this.back.current;
    return (
      <div className='Test'>
        <div className='Background'  ref={this.back}>
          <img src='https://images.ctfassets.net/vnxry7jc7f2k/75KxXoiXG08POrUpCljSa9/da632f2b0bd10fdbbcf89d704e07a245/1.jpg?w=1440&h=1800&q=80&fm=webp'>
          </img>
          <img src='https://images.ctfassets.net/vnxry7jc7f2k/1NaxJV9Xc0Ve10F9I7qxdy/d8de24a3af839c8841c77dd2b54a27d6/superfluid_ott1693.jpg?w=1440&h=1800&q=80&fm=webp'></img>
          <img src='https://images.ctfassets.net/vnxry7jc7f2k/6WYylPT5lY1WCC9dDi51xK/bfcd283d6d647370a9754b38aa71b25d/resize-09.jpg?w=1440&h=1800&q=80&fm=webp'></img>
        </div>
        <div className='Foreground'>
          <div className='Fore Icon1'>
            <img className='Icon1' src='https://i.ibb.co/wS6dvTj/icontrans.png'></img>
          </div>
          <div className='Fore Product'>
            <img className='Product'src='https://images.ctfassets.net/vnxry7jc7f2k/7EtX4lxmITWCGLCDU6X3Re/4eedd4a78a76f91c81f3bdc44a3c2250/03_SUPERFLUID_200421_0005_-_5-4.png?w=150&h=431&q=80&fm=webp'></img>
          </div>
          <div className='Fore Icon2'>
            <img className='Icon2' src='https://i.ibb.co/XSqfNDt/icon-Black.png'></img>
          </div>
          <div className='Fore Icon2'>
            <img className='Icon2' src='https://i.ibb.co/XSqfNDt/icon-Black.png'></img>
          </div>
          <div className='Fore Icon2'>
            <img className='Icon2' src='https://i.ibb.co/XSqfNDt/icon-Black.png'></img>
          </div>
        </div>
      </div>
    )
  }
}

export default LeftSlider;