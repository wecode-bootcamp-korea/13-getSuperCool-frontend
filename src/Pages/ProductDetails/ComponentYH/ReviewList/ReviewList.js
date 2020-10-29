// import { render } from "node-sass";
import React from "react";
import reviewMock from "./reviewMock."

class ReviewList extends React.Component {
  render(){
    return(
      <div className='ReviewList'>
        <div className='HowMany'>
          REVIEWS
        </div>
        <div className='Reviews'>
          <ul>
            {/* {monsters.map(monster => {
              return (
                <Card
                  key={monster.id}
                  id={monster.id}
                  name={monster.name}
                  email={monster.email}
                />
              );
            })} */}

            {/* {arr.map((str, idx) => {
              return (
                <li key={str} onClick={() => this.handleClick(idx + 1)}>
                  {str}
                </li>
              );
            })} */}

            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ReviewList;