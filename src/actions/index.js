import React from 'react';

export const addTeammates = (team, name = null) => {
  return {
    type: team,
    payload: name
  }
}

export const newInning = (team) => {
  if(team == "NEXT") {
    return {
      type: "NEXT"
    }
  }
}
