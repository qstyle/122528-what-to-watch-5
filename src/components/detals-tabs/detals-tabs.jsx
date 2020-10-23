import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {connect} from "react-redux";
import TabsOverview from "./tabs-overview";
import TabsDetal from "./tabs-detal";
import TabsReviews from "./tabs-reviews";

class DetalsCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stateInfo: `overview`
    };
    this.getInfoBlock = this.getInfoBlock.bind(this);
  }

  getInfoBlock() {
    if (this.state.stateInfo === `overview`) {
      return <TabsOverview film={this.props.film}/>;
    }
    if (this.state.stateInfo === `details`) {
      return <TabsDetal film={this.props.film}/>;
    }
    if (this.state.stateInfo === `reviews`) {
      return <TabsReviews/>;
    }
  }

  tabsClickHandler(clickInfo) {
    this.setState({stateInfo: clickInfo});
  }
  render() {

    return <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item movie-nav__item--active">
            <a className="movie-nav__link" onClick={()=>this.tabsClickHandler(`overview`)}>Overview</a>
          </li>
          <li className="movie-nav__item">
            <a className="movie-nav__link" onClick={()=>this.tabsClickHandler(`details`)}>Details</a>
          </li>
          <li className="movie-nav__item">
            <a className="movie-nav__link" onClick={()=>this.tabsClickHandler(`reviews`)}>Reviews</a>
          </li>
        </ul>
      </nav>
      <h1>{this.state.stateInfo}</h1>
      {this.getInfoBlock()}

    </div>;
  }
}
const mapStateToProps = (state) => {
  return {
    film: state.appFilter[0],
  };
};

export default connect(mapStateToProps)(DetalsCards);

DetalsCards.propTypes = {
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
