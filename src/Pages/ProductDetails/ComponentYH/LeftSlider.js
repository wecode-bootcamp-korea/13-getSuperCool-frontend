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
    return (
      <div className='LeftSlider'>
        <div className='Background'>
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
            <img className='Product'src='https://images.ctfassets.net/vnxry7jc7f2k/7jlZKvTNGxa1ubfV9nT4GU/2065bdd2cf494fe2bc31587849253e04/04_superfluid_200421_0036_mauve_copy.png?w=150&h=582&q=80&fm=webp'></img>
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