import React from 'react';

export const addTeammates = (team, name) => {
  return {
    team: team,
    name: name
  }
}

export const newInning = () => {
  return {
    type: "NEXT"
  }
}
