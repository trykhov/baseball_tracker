import React from 'react';
import '../css/create_teams.css';

class CreateTeams extends React.Component {


  render() {
    return(
      <section id="teams">
        <h1 id="teams_header"> Make Your Teams! </h1>
        <div id="team_container">
          <div className="make_team"> Team 1 </div>
          <div className="make_team"> Team 2 </div>
        </div>
      </section>
    )
  }
}


export default CreateTeams;
