import React from "react";
import IndexBody from "../index-body/index-body";
import propTypes from "prop-types";


const App = (props) => {
  const {appData} = props;
  return (
    <IndexBody filmsData = {appData}/>
  );
};

App.propTypes = {
  appData: propTypes.object.isRequired
};

export default App;
