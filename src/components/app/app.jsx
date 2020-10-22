import React from "react";
import MainPage from "../main-page/main-page";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import FilmPage from "../films-page/films-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import AddReviews from "../add-reviews/add-reviews";
import PlayerPage from "../player-page/player-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render ={({history})=>
          (<MainPage
            onPlayButtonClick={() => history.push(`/player/:id`)}
          />)}/>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage />
        </Route>
        <Route exact path="/films/:id">
          <FilmPage />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviews />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


export default App;


