import React, { Component } from "react";
import "./SearchBox.scss"

class SearchBox extends Component {
  render() {
    const { handleChange, searchInput, handleDefaultCategory } = this.props;
    return (
      <div className="SearchBox">
        <input
          className="search"
          type="search"
          placeholder="SEARCH..."
          name={searchInput}
          onChange={handleChange}
          onMouseDown={handleDefaultCategory}
          value={searchInput}
        />
        <button><i class="fas fa-search"></i></button>
      </div>
    )
  }
}

export default SearchBox;