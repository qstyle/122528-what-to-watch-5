import React from "react";
import propTypes from "prop-types";


const tabsOverview = (props)=>{
  const {director, starring, rating, discription} = props.film;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{discription}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </React.Fragment>);
};
export default tabsOverview;

tabsOverview.propTypes = {
  filmName: propTypes.string,
  years: propTypes.string,
  filmAvatar: propTypes.string,
  filmGenre: propTypes.string,
  rating: propTypes.number,
  discription: propTypes.string,
  director: propTypes.string,
  starring: propTypes.string,
  film: propTypes.object,
  films: propTypes.array
};
