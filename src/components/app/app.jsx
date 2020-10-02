import React from "react";
import MainPage from "../main-page/main-page";
import propTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import FilmPageReviews from "../film-page-reviews/film-page-reviews";
import FilmPage from "../films-page/films-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import PlayerPage from "../player-page/player-page";


const App = (props) => {
  const {appData} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage filmsData={appData} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage />
        </Route>
        <Route exact path="/films">
          <FilmPageReviews />
        </Route>
        <Route exact path="/film">
          <FilmPage />
        </Route>
        <Route exact path="/player">
          <PlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  appData: propTypes.object.isRequired
};

export default App;
