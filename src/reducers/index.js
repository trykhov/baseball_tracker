import React from 'react';
import { combineReducers } from 'redux';


const addtoTeamOne = (roster = [], action) => {
  if(action.type.team === "TEAM_1") {
    return [...roster, action.payload];
  } else {
    return roster;
  }
}

const addtoTeamTwo = (roster = [], action) => {
  return action.type.team === "TEAM_2" ? [...roster, action.payload] : roster;
}

const changeInnings = (currIn = 1, action) => {
  return action.type === "NEXT" ? currIn + 1 : currIn;
}

const flipArrow = (topBottom = true, action) => { // true = top, false = bottom of inning
  return action.type === "CHANGE" ? !topBottom : topBottom;
}

const strikeOut = (strike = 0, action) => {
  if(action.type === "STRIKE") {
    return strike === 2 ? 0 : strike + 1;
  } else {
    return strike
  }
}

const out = (outs = 0, action) => {
  if(action.type === "OUT") {
    return outs === 2 ? 0 : outs + 1;
  } else {
    return outs
  }
}

const scoreOne = (score = 0, team, action) => {
  if(action.type === "SCORE" && team === "TEAM_1") {
    return score + action.payload;
  } else {
    return score
  }
}

const scoreTwo = (score = 0, team, action) => {
  if(action.type === "SCORE" && team === "TEAM_2") {
    return score + action.payload;
  } else {
    return score;
  }
}

const whoOnBase = (bases = [], action) => {
  return action.type === "HIT" ? action.payload : bases;
}


// these store values into the central store
export default combineReducers({
  inning: changeInnings, // stores an integer
  inDirection: flipArrow, // stores a boolean
  team1Players: addtoTeamOne, // stores an array of players on team 1
  team2Players: addtoTeamTwo, // stores an array of players on team 2
  strikes: strikeOut, // returns an integer for the current strikes in the game
  outs: out, // returns integer of outs
  onBase: whoOnBase // returns array of who is on base
})
