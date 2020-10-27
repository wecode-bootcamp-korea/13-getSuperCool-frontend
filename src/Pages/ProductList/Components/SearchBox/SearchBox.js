import React, { Component } from "react";
import "./SearchBox.scss"

class SearchBox extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div className="SearchBox">
        <input
          className="search"
          type="search"
          placeholder="SEARCH..."
          name={this.props.userInput}
          onChange={handleChange}
          value={this.props.userInput}
        />
        <button><i class="fas fa-search"></i></button>
      </div>
    )
  }
}

export default SearchBox;