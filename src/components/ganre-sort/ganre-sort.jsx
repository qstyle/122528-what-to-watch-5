import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import propTypes from "prop-types";

const GanreSort = (props)=>{
  const {onClickGenreDefault, onClickGenrePic} = props;
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link" onClick={()=>onClickGenreDefault()}>All genres</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={()=>onClickGenrePic(`action`)} >Comedies</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={()=>onClickGenrePic(`drama`)}>Crime</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={()=>onClickGenrePic(`action`)}>Documentary</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={()=>onClickGenrePic(`drama`)}>Dramas</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={()=>onClickGenrePic(`action`)}>Horror</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={()=>onClickGenrePic(`drama`)}>Kids & Family</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={()=>onClickGenrePic(`action`)}>Romance</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" >Sci-Fi</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Thrillers</a>
      </li>
    </ul>
  );
};

GanreSort.propTypes = {
  onClickGenreDefault: propTypes.func,
  onClickGenrePic: propTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onClickGenreDefault() {
    dispatch(ActionCreator.sortDefault());
  },
  onClickGenrePic(genre) {
    dispatch(ActionCreator.sortGanre(genre));
  }
});

export {GanreSort};
export default connect(null, mapDispatchToProps)(GanreSort);
