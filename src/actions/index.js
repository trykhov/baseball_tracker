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

export const newInning = () => {
    return {type: "NEXT"}
}

export const strike = () => {
  return {type: "STRIKE"}
}

export const youreOut = () => {
  return {type: "OUT"}
}

export const score = (count) => {
  return {type: "SCORE", payload: count}
}

export const batter = () => {
  return {type: "BATTER"}
}

export const hit = bases => {
  return {type: "HIT", payload: bases}
}
