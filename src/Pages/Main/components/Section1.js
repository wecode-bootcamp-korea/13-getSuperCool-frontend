import React, { Component } from "react";

class Section1 extends Component {
  render() {
    return (
      <div>
        <div className="image">
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
        </div>
        {/* <div className="circle">
          <div className="firstBtn"></div>
          <div className="SecondBtn"></div>
          <div className="thirdBtn"></div>
        </div> */}
      </div>
    );
  }
}

export default Section1;
