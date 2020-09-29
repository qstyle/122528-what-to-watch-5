import React from "react";
import IndexBody from "../index-body/index-body";
import propTypes from "prop-types";


const App = (probs) => {
  const {title} = probs;
  console.log( typeof title);
  return (
    <IndexBody filmsData = {title}/>
  );
};

App.propTypes = {
  title: propTypes.object.isRequired
};

export default App;
