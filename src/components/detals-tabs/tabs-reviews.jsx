import React from "react";


const tabsRerview = ()=>{
  return (
    <React.Fragment>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">Anderson`s films are too precious for some, but for those of us willing to lose ourselves in them, they`re a delight. `The Grand Budapest Hotel` is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>
          <footer className="review__details">
            <cite className="review__author">Bill Goodykoontz</cite>
            <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
          </footer>
        </blockquote>

        <div className="review__rating">8,0</div>
      </div>
    </React.Fragment>);
};

export default tabsRerview;
