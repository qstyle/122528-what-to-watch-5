import {extend} from "../utils/utils";
import {ActionType} from "./action";
import sortFilms from "../utils/sort-films";
import mocks from "../mocks/mock-film.js";

const initialState = {
  filmList: mocks(),
  appFilter: mocks(),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.sortGanre:
      return extend(state, {
        appFilter: sortFilms(state.filmList, action.payload),
      });
    case ActionType.sortGanreDefault:
      return extend(state, {
        appFilter: state.filmList,
      });
  }
  return state;
};


export default reducer;
