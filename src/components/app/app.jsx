import React from "react";
import MainPage from "../main-page/main-page";
import propTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import FilmPage from "../films-page/films-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import AddReviews from "../add-reviews/add-reviews";
import PlayerPage from "../player-page/player-page";

const App = (props) => {
  const {appData} = props;
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" render ={({history})=>
          (<MainPage
            onPlayButtonClick={() => history.push(`/player/:id`)}
            filmsData={appData} />)}/>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage filmsData={appData[0]} />
        </Route>
        <Route exact path="/films/:id">
          <FilmPage filmsData={appData[0]}/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviews filmsData={appData[0]}/>
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage filmsData={appData[0]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  appData: propTypes.array.isRequired
};

export default App;


