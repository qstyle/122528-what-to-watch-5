import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const FilmData = {
  filmName: `The Grand Budapest Hotel`,
  dateRelease: `2014`,
  genre: `drama`
};

ReactDOM.render(
    <App appData = {FilmData}/>,
    document.querySelector(`#root`)
);
