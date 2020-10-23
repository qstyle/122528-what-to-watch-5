import propTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import DetalTabs from "../detals-tabs/detals-tabs";
import SmollFilmCard from "../small-film-card-detals/small-film-card-detals";
import {sortFilms} from "../../utils/sort-films.js";


const FilmsPage = (props)=>{
  const {filmName, years, filmAvatar, filmGenre} = props.film;
  const filmArray = (sortFilms(props.films, filmGenre)).slice(0, 4);
  const filmsArray = filmArray.map((film, i)=>{
    return <SmollFilmCard
      key={i}
      film={film}
    />;
  });


  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`img/${filmAvatar}.jpg`} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmName}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmGenre}</span>
                <span className="movie-card__year">{years}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>

                </button>
                <Link to="/films/:id/review" className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${filmAvatar}.jpg`} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>
            <DetalTabs/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            {filmsArray}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};


FilmsPage.propTypes = {
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
const mapStateToProps = (state) => {
  return {
    film: state.appFilter[0],
    films: state.filmList
  };
};

export default connect(mapStateToProps)(FilmsPage);
