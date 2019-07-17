import React from 'react';

export const addTeammates = (team, teamName, name = null) => {
  return {
    type: {
      team: team,
      teamName: teamName
    },
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
