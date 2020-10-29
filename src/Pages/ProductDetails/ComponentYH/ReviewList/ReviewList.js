// import { render } from "node-sass";
import React from "react";
import review from "./reviewMock.json";
class ReviewList extends React.Component {
  render(){
    return(
      <div className='ReviewList'>
        <div className='HowMany'>
          REVIEWS
        </div>
        <div className='Reviews'>
          <ul>
            {review.map(idx => {
              return (
                <>
                  <div className="review">
                    <p>{idx.id}  {idx.date}</p>
                    <p>{idx.review}</p>
                    <p>Skin Type: {idx.skin}</p>
                    <p>Age Range: {idx["age range"]}</p>
                  </div>
                </>
              );
            })}

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