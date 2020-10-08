import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import mocks from "./mocks/mock-film.js";


ReactDOM.render(
    <App appData = {mocks()}/>,
    document.querySelector(`#root`)
);


