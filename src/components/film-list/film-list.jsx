import React, {PureComponent} from "react";
import FilmCard from "../small-film-card/small-film-card";
import propTypes from "prop-types";
import {connect} from "react-redux";

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoverMouseId: 0,
    };

    this.onMouse = this.onMouse.bind(this);
    this.leaveMouse = this.leaveMouse.bind(this);
  }
  render() {
    const filmsArray = this.props.film.map((film, i)=>{
      return <FilmCard
        key={i}
        film={film}
        onMouse={this.onMouse}
        leaveMouse={this.leaveMouse}
        isHovered={this.state.hoverMouseId === film.id}
      />;
    });
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {filmsArray}
        </div>
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

