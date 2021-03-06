import React from 'react';
import '../css/app.css';
import solo_cup from '../img/solo_cup.png';
import { Link } from 'react-router-dom';

const App = () => {
  return(
    <div id="app">
      <h1 id="app_title">Baseball</h1>
      <img id="solo_cup" src={solo_cup} alt="main"/>
      <Link to="/team1_build">
        <div id="teams_btn"> Create Teams </div>
      </Link>
    </div>
  )
}

export default App;
