import React, {PureComponent} from "react";
import FilmCard from "../small-film-card/small-film-card";
import propTypes from "prop-types";
import {connect} from "react-redux";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoverMouseId: 0,
      filmRenderCount: 8,
    };

    this.onMouse = this.onMouse.bind(this);
    this.leaveMouse = this.leaveMouse.bind(this);
    this.showMoreClickHandler = this.showMoreClickHandler.bind(this);
    this.renderFilmArray = this.props.film;
  }

  showMoreClickHandler() {
    this.setState({filmRenderCount: this.state.filmRenderCount + 8});
  }
  filmsArray() {
    const filmsArrayCount = this.renderFilmArray.slice(0, this.state.filmRenderCount);
    return filmsArrayCount.map((film, i)=>{
      return <FilmCard
        key={i}
        film={film}
        onMouse={this.onMouse}
        leaveMouse={this.leaveMouse}
        isHovered={this.state.hoverMouseId === film.id}
      />;
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {this.filmsArray()}
        </div>
        {this.state.filmRenderCount < 20 ?
          <ShowMoreButton showMoreClickHandler={this.showMoreClickHandler}/> : ``
        }
      </React.Fragment>
    );
  }

  componentWillUnmount() {
    this.clearPlaybackTimeout();
  }

  onMouse(id) {
    this.playbackTimeout = setTimeout(() => {
      this.setState({hoverMouseId: id});
      this.playbackTimeout = null;
    }, 1000);
  }

  leaveMouse() {
    this.clearPlaybackTimeout();
    this.setState({hoverMouseId: 0});
  }

  clearPlaybackTimeout() {
    if (this.playbackTimeout) {
      clearTimeout(this.playbackTimeout);
    }
  }
}
const mapStateToProps = (state) => {
  return {
    film: state.appFilter,
  };
};

export default connect(mapStateToProps)(FilmList);

FilmList.propTypes = {
  filmData: propTypes.array,
  film: propTypes.array
};

