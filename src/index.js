import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const FilmData = {
  filmName: `The Grand Budapest Hotel`,
  dataRelise: `2014`,
  genre: `drama`
};

ReactDOM.render(
    <App title = {FilmData}/>,
    document.querySelector(`#root`)
);
