import React, {PureComponent} from "react";
import FilmCard from "../small-film-card/small-film-card";
import propTypes from "prop-types";

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
    const filmsArray = this.props.filmData.map((film, i)=>{
      return <FilmCard key={i} film={film}
        onMouse={this.onMouse}
        leaveMouse={this.leaveMouse}/>;
    });
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {filmsArray}
        </div>
      </React.Fragment>
    );
  }

  onMouse(id) {
    this.setState({hoverMouseId: id});
  }

  leaveMouse() {
    this.setState({hoverMouseId: 0});
  }
}

export default FilmList;

FilmList.propTypes = {
  filmData: propTypes.array,
};

