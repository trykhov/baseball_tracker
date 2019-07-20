import React from 'react';
import { combineReducers } from 'redux';


const addtoTeamOne = (roster = [], action) => {
  return action.type.team === "TEAM_1" ? [...roster, action.payload] : roster;
}

const teamOneName = (name = "Team 1", action) => {
  return action.type.team === "TEAM_1" ? action.type.teamName : name;
}

const teamTwoName = (name = "Team 2", action) => {
  return action.type.team === "TEAM_2" ? action.type.teamName : name;
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

const scoreOne = (score = 0, action) => {
  if(action.type === "SCORE" && action.payload === "TEAM_1") {
    return score + 1;
  } else {
    return score
  }
}

const scoreTwo = (score = 0, action) => {
  if(action.type === "SCORE" && action.payload === "TEAM_2") {
    return score + 1;
  } else {
    return score;
  }
}

const whoOnBase = (bases = [], action) => {
  return action.type === "HIT" ? action.payload : bases;
}


// these store values into the central store
export default combineReducers({
  inDirection: flipArrow, // stores a boolean
  inning: changeInnings, // stores an integer
  onBase: whoOnBase, // returns array of who is on base
  outs: out, // returns integer of outs
  oneScore: scoreOne,
  strikes: strikeOut, // returns an integer for the current strikes in the game
  teamOneName: teamOneName,
  team1Players: addtoTeamOne, // stores an array of players on team 1
  teamTwoName: teamTwoName,
  team2Players: addtoTeamTwo, // stores an array of players on team 2
  twoScore: scoreTwo
})
