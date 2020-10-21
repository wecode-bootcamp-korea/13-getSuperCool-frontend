import React from "react";
import "./Menubar.scss";

class Menubar extends React.Component {
  constructor() {
    super();

    this.state = {
      category1 : "visible",
      category2 : "visible",
    }
  }

  handleCategory1 = () => {
    const { category1 } = this.state;

    if(category1 === "visible") {
      this.setState({
        category1 : "invisible",
      })
    } else {
      this.setState({
        category1 : "visible",
      })
    }
  }

  handleCategory2 = () => {
    const { category2 } = this.state;

    if(category2 === "visible") {
      this.setState({
        category2 : "invisible",
      })
    } else {
      this.setState({
        category2 : "visible",
      })
    }
  }

  render () {
    const { handleCategory1 , handleCategory2} = this;
    const { category1, category2 } = this.state; 

    return (
      <div className="Menubar">
        <span className={category1} onClick={handleCategory1}>CATEGORY</span>
        <ul>
          <li className={category1}>COLOR</li>
          <li className={category1}>CARE</li>
        </ul>

        <span className={category2} onClick={handleCategory2}>APPLY ON</span>
        <ul>
          <li className={category2}>LIPS</li>
          <li className={category2}>EYES</li>
          <li className={category2}>FACE</li>
        </ul>
        <div>
          <p> Vegan, clean and lighrweight formulas</p> 
          <p> made for those who like to keep it </p>
          <p> simple yet still have fun. Make them</p>
          <p>yours and show us your own unique</p>
          <p>routine!</p>    
        </div>    
      </div>
    )
  }
}

export default Menubar;