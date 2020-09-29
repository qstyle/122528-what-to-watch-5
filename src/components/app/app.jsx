import React from "react";
import IndexBody from "../index-body/index-body";
import propTypes from "prop-types";


const App = (probs) => {
  const {title} = probs;
  return (
    <IndexBody filmsData = {title}/>
  );
};

App.propTypes = {
  title: propTypes.object.isRequired
};

export default App;
