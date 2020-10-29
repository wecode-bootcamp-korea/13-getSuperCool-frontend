import React from "react";

class Ingredients extends React.Component {

  render (){
    const { size, goodToKnow, contains } = this.props;
    return(
      <div className='ingredients'>
        <div className='size'>
          {size}
        </div>
        <div className='goodToKnow'>
          <span>Good To Know: </span>
          {goodToKnow}
        </div>
        <div className='contains'>
          <span>Contains: </span>
          {contains}
        </div>
      </div>
    )
  }
}

export default Ingredients;
