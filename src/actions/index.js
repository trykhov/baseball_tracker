import React from 'react';

export const addTeammates = (team, teamName, name) => {
  return {
    type: {
      team: team,
      teamName: teamName
    },
    payload: name
  }
}

export const newInning = () => { // changes the number of the innning
    return {type: "NEXT"}
}

export const changeArrow = () => { // this changes the up and down sign of the innings
  return {type: "CHANGE"}
}

export const strike = () => { // counts the number of strikes of current batter
  return {type: "STRIKE"}
}

export const youreOut = () => { // batter is out
  return {type: "OUT"}
}

export const score = (teamScore) => { // keeps track of the score
  return {type: "SCORE", payload: teamScore}
}

export const batter = () => { // tells us current batter
  return {type: "BATTER"}
}

export const hit = bases => { // tells how many bases covered from hit
  return {type: "HIT", payload: bases}
}

export const currBatterOne = (teamOnePlayers) => {
  return {type: "TEAM_1", payload: teamOnePlayers}
}

export const currBatterTwo = (teamTwoPlayers) => {
  return {type: "TEAM_2", payload: teamTwoPlayers}
}
