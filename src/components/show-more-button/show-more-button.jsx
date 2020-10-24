import React from "react";
import propTypes from "prop-types";


const ShowMoreButton = (props)=>{
  const {showMoreClickHandler} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={()=>showMoreClickHandler()}>Show more</button>
    </div>
  );
};
export default ShowMoreButton;
ShowMoreButton.propTypes = {
  showMoreClickHandler: propTypes.func
};
