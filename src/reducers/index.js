import React from 'react';
import { combineReducers } from 'redux';


const addtoTeamOne = (roster = [], action) => {
  if(action.team === "TEAM_1") {
    return [...roster, action.name];
  } else {
    return roster;
  }
}

const addtoTeamTwo = (roster = [], action) => {
  if(action.team === "TEAM_2") {
    return [...roster, action.name];
  } else {
    return roster;
  }
}

const changeInnings = (currIn = 1, action) => {
  if(action.type === "NEXT") {
    return currIn + 1;
  } else {
    return currIn;
  }
}

// these store values into the central store
export default combineReducers({
  inning: changeInnings, // stores an integer
  team1Players: addtoTeamOne, // stores an array
  team2Players: addtoTeamTwo // stores an array
})
