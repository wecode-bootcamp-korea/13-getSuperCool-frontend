import React from "react";
// import "./Menubar.scss";

class Menubar extends React.Component {
  constructor() {
    super();
    this.state = {
      category1: true,
      category2: true,
    }
  }

  handleAccordionMenu = (category) => {
    this.setState({
      [category]: !this.state[category]
    })
  }

  render () {

    const { category1, category2 } = this.state;
    const listName1 = category1 ? "visible" : "invisible";
    const listName2 = category2 ? "visible" : "invisible";

    return (
      <div className="Menubar">
        <span className={listName1} onClick={() => this.handleAccordionMenu("category1")}>CATEGORY</span>
        <ul className={listName1}>
          <li>COLOR</li>
          <li>CARE</li>
        </ul>

        <span className={listName2} onClick={() => this.handleAccordionMenu("category2")}>APPLY ON</span>
        <ul  className={listName2}>
          <li>LIPS</li>
          <li>EYES</li>
          <li>FACE</li>
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