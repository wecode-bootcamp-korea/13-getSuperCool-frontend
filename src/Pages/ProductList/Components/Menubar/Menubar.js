import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./Menubar.scss";
class Menubar extends React.Component {
  constructor() {
    super();
    this.state = {
      category1: true,
      category2: true,
      COLOR : false,
      CARE : false,
      LIPS : false,
      EYES : false,
      FACE : false,
    }
  }
  handleClickCategory = (name) => {
    this.props.getCategories(name);
    this.props.handleDefaultSearch();
    this.setState({
      [name] : !this.state[name],
    })
  }
  handleClickApplies = (name) => {
    this.props.getApplies(name);
    this.props.handleDefaultSearch();
    this.setState({
      [name] : !this.state[name],
    })
  }
  handleDefaultCategory = () => {
    this.setState({
      COLOR : false,
      CARE : false,
      LIPS : false,
      EYES : false,
      FACE : false,
    })
  }
  handleAccordionMenu = (category) => {
    this.setState({
      [category]: !this.state[category]
    })
  }
  render () {
    const { category1, category2 } = this.state;
    return (
      <div className="Menubar">
        <SearchBox handleChange={this.props.handleChange} handleDefaultCategory={this.handleDefaultCategory} searchInput={this.props.searchInput} />
        <span className={category1 ? "visible" : "invisible"} onClick={() => this.handleAccordionMenu("category1")}>CATEGORY</span>
        <ul className={category1 ? "visible" : "invisible"}>
          <li onClick={() => this.handleClickCategory("COLOR")} className={this.state.COLOR ? "clicked" : ""}>COLOR</li>
          <li onClick={() => this.handleClickCategory("CARE")} className={this.state.CARE ? "clicked" : ""}>CARE</li>
        </ul>
        <span className={category2 ? "visible" : "invisible"} onClick={() => this.handleAccordionMenu("category2")}>APPLY ON</span>
        <ul  className={category2 ? "visible" : "invisible"}>
          <li onClick={() => this.handleClickApplies("LIPS")} className={this.state.LIPS ? "clicked" : ""}>LIPS</li>
          <li onClick={() => this.handleClickApplies("EYES")} className={this.state.EYES ? "clicked" : ""}>EYES</li>
          <li onClick={() => this.handleClickApplies("FACE")} className={this.state.FACE ? "clicked" : ""}>FACE</li>
        </ul>
        <div>
          <p> Vegan, clean and lighrweight formulas</p> 
          <p> made for those who like to keep it </p>
          <p> simple yet still have fun. Make them</p>
          <p>yours and show us your own unique</p>
          <p>routine!</p>    
        </div> 
        <div className="marquee">
          <div>
            <span>FREE SHIPPING ON ORDERS OVER 34€   ·  10% DISCOUNT IF YOU SUBSCRIBE TO THE NEWSLETTER</span>
            <span>THE NEWSLETTER  ·  FREE SHIPPING ON ORDERS OVER 34€   ·  10% DISCOUNT IF YOU SUBSCRIBE · </span>
          </div>
        </div> 
      </div> 
    )
  }
}
export default Menubar;