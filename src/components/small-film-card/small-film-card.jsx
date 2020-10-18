import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoCard from "../video-small-card/video-small-card";

const smallFilmCard = (props)=>{
  const {filmName, filmAvatar, id, filmVideo} = props.film;
  const {onMouse} = props;
  const {leaveMouse} = props;
  const {playFilmId} = props;
  return (

    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onPointerEnter={()=> onMouse(id)} onPointerLeave={()=>leaveMouse()}>
        <Link to="/films/:id">
          <div className="small-movie-card__image">
            <VideoCard playFilmId={playFilmId}
              filmId={id}
              filmVideo={filmVideo}
              filmAvatar={filmAvatar}/>
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
  id: propTypes.number,
  film: propTypes.object,
  onMouse: propTypes.func,
  leaveMouse: propTypes.func,
  playFilmId: propTypes.number
};
