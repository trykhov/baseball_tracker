import React from 'react';
import '../css/create_teams.css';
import { Link } from 'react-router-dom';

class CreateTeams extends React.Component {


  render() {
    return(
      <section id="teams">
        <h1 id="teams_header"> Make Your Teams! </h1>
        <div id="team_container">
          <Link to="/team1_build">
            <div className="make_team"> Team 1 </div>
          </Link>
          <Link to="/team2_build">
            <div className="make_team"> Team 2 </div>
          </Link>
        </div>
      </section>
    )
  }
}


export default CreateTeams;
