import React, { createRef } from "react";
import "./LeftSlider.scss"

class LeftSlider extends React.Component {
  constructor(){
    super();
    this.back = React.createRef();
    this.state = {
    };
  }

  // ScrollActive = () => {
  //   if(window.scrollY>735){
  //     this.setState()
  //   }
  // }
  // enableScroll();
  //   document.getElementById("status").innerHTML = "enabled";
  //     document.getElementById("status").className = "enabled";
  // };
  
  // document.getElementById("disable").onclick = function() {
  //   disableScroll();
  //   document.getElementById("status").innerHTML = "disabled";
  //   document.getElementById("status").className = "disabled";
  // };
  
  
  // // left: 37, up: 38, right: 39, down: 40,
  // // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  // var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  
  // function preventDefault(e) {
  //   e.preventDefault();
  // }
  
  // function preventDefaultForScrollKeys(e) {
  //     if (keys[e.keyCode]) {
  //         preventDefault(e);
  //         return false;
  //     }
  // }
  
  // // modern Chrome requires { passive: false } when adding event
  // var supportsPassive = false;
  // try {
  //   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
  //     get: function () { supportsPassive = true; } 
  //   }));
  // } catch(e) {}
  
  // var wheelOpt = supportsPassive ? { passive: false } : false;
  // var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  
  // // call this to Disable
  // function disableScroll() {
  //   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  //   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  //   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  //   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  // }
  
  // // call this to Enable
  // function enableScroll() {
  //   window.removeEventListener('DOMMouseScroll', preventDefault, false);
  //   window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  //   window.removeEventListener('touchmove', preventDefault, wheelOpt);
  //   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  // }

  render(){

    const {bg1, bg2, bg3, product}=this.props;
    return (
      <div className='LeftSlider'>
        <div className='Background'>
          <img src={bg1}>
          </img>
          <img src={bg2}></img>
          <img src={bg3}></img>
        </div>
        <div className='Foreground'>
          <div className='Fore Icon1'>
            <img className='Icon1' src='https://i.ibb.co/wS6dvTj/icontrans.png'></img>
          </div>
          <div className='Fore Product'>
            <img className='Product'src={product}></img>
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