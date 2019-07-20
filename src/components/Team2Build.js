import React from 'react';
import { connect } from 'react-redux';
import { addTeammates } from '../actions';
import '../css/teambuild.css';
import { Link } from 'react-router-dom';

class TeamBuild extends React.Component {

  // creating a local state for the input of names
  // redux is a global state
  state = {
    teamName: '',
    playerName: ''
  }

  changeTeamName = e => {
    this.setState({
      teamName: e.target.value
    })
  }

  changePlayerName = e => {
    this.setState({
      playerName: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTeammates("TEAM_2", this.state.teamName, this.state.playerName)
    this.setState({
      teamName: this.state.teamName,
      playerName: ''
    })
  }

  showRoster = list => {
    const currRoster = list.map(player => {
      return(
        <div className="formRow" key={Math.random()}>
          <a className="ui image label">
            {player}
          </a>
        </div>
      )
    });
    return currRoster
  }

  stopMessage = () => {
    if(this.props.players.length > 0) {
      return(
        <Link to="/play_ball">
          <button className="ui primary button" >
            Done
          </button>
        </Link>
      )
    }
  }

  // componentDidUpdate() {
  //   console.log(this.props.players);
  // }

  render() {
    return(
      <section className="teamBuild">
        <h1 id="teams_header"> Make Your Team! </h1>
        <div className="teamContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="formRow">
              <label>Team 2 Name: </label>
              <div className="ui input focus" data-children-count="1">
                <input type="text" placeholder="Team Name" onChange={this.changeTeamName} value={this.state.teamName}/>
              </div>
            </div>
            <div className="formRow">
              <label>Players: </label>
              <div className="ui input focus" data-children-count="1">
                <input type="text" placeholder="Player Name" onChange={this.changePlayerName} value={this.state.playerName}/>
                <button className="ui icon button">
                  <i className="plus square outline icon"></i>
                </button>
              </div>
            </div>
            <div>
            {this.showRoster(this.props.players)}
            </div>
          </form>
          {this.stopMessage()}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {players: state.team2Players}
}

export default connect(mapStateToProps, {addTeammates})(TeamBuild);
