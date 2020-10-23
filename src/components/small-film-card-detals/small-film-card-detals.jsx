import React from "react";
import propTypes from "prop-types";

const smollFilmCard = (props)=>{
  const {filmAvatar, filmName} = props.film;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/${filmAvatar}.jpg`} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{filmName}</a>
      </h3>
    </article>
  );
};
export default smollFilmCard;

smollFilmCard.propTypes = {
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
