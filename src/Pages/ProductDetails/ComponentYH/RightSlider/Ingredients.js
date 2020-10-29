import React from "react";

class Ingredients extends React.Component {


  render (){
    return(
      <div className='ingredients'>
        <div className='size'>
          {this.props.size}
        </div>
        <div className='size'>
          Good To Know
          {this.props.goodToKnow}
        </div>
        <div className='size'>
          Contains
          {this.props.contains}
        </div>
      </div>
    )
  }
}

export default Ingredients;