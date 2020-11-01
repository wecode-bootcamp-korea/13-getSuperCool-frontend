import React, { createRef } from "react";
import "./LeftSlider.scss"
import Parallax from "react-rellax";


class LeftSlider extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }
  
  render(){
    const {bg1, bg2, bg3, product}=this.props;
    console.log(this.props.scroll)
    return (
      <div className='LeftSlider'>
        <Parallax speed={0}>
          <div className="Background">
            <img src={bg1}></img>
            <img src={bg2}></img>
            <img src={bg3}></img>
          </div>
        </Parallax>
        <Parallax speed={6}>
          <div className='Foreground'>
            <div className='Fore Icon1'>
              <img className='Icon1' src='https://i.ibb.co/wS6dvTj/icontrans.png'></img>
            </div>
            <div className='Fore Product'>
              <img ref={this.scrollingPoint} className='Product'src={product}></img>
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
        </Parallax>
      </div>
    )
  }
}

export default LeftSlider;