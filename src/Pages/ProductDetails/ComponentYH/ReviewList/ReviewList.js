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
            {review.map(idx => 
              <>
                <li className="review">
                  <p>{idx.title}  <span>{idx.name}  {idx.date}</span></p>
                  <p>{idx.review}</p>
                  <p>{idx.skin}</p>
                  <p>{idx.age}</p>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default ReviewList;