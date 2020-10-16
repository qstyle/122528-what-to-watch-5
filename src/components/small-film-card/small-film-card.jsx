import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";

const smallFilmCard = (props)=>{
  const {filmName, filmAvatar, id} = props.film;
  const {onMouse} = props;
  const {leaveMouse} = props;
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onPointerEnter={()=> onMouse(id)} onPointerLeave={()=>leaveMouse}>
        <Link to="/films/:id">
          <div className="small-movie-card__image">
            <img src={`img/${filmAvatar}.jpg`} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
          </div>
        </Link>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to="/films/:id">{filmName}</Link>
        </h3>
      </article>
    </React.Fragment>
  );


};

export default smallFilmCard;

smallFilmCard.propTypes = {
  filmAvatar: propTypes.string,
  filmName: propTypes.string,
  id: propTypes.number
};
