import React from "react";
import propTypes from "prop-types";

const smallFilmCard = (props, handleClick, leaveMouse)=>{
  const {filmName, filmAvatar, id} = props;
  return (<React.Fragment>
    <article className="small-movie-card catalog__movies-card" onPointerLeave = {() =>leaveMouse()} onPointerEnter={() => handleClick(id)} >
      <div className="small-movie-card__image">
        <img src={`img/${filmAvatar}.jpg`} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{filmName}</a>
      </h3>
    </article>
  </React.Fragment>);


};

export default smallFilmCard;

smallFilmCard.propTypes = {
  filmAvatar: propTypes.string,
  filmName: propTypes.string,
  id: propTypes.number,
};
