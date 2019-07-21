import React from 'react';
import { connect } from 'react-redux';
import { addTeammates } from '../actions';
import { Link } from 'react-router-dom';
import '../css/teambuild.css';

class TeamBuild extends React.Component {

  // creating a local state for the input of names
  // redux is a global state
  state = {
    teamName: '',
    playerName: '',
    errorMessage: ''
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
    if(this.state.playerName.length > 0) {
      this.props.addTeammates("TEAM_1", this.state.teamName, this.state.playerName)
    }
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
        <Link to="/team2_build">
          <button className="ui primary button" >
            Done
          </button>
        </Link>
      )
    } else {
      return (
        <div>
        {this.state.errorMessage}
          <button className="ui button" onClick={() =>
            this.setState({errorMessage: <p style={{color: "red"}}> * Every team must have at least one player</p>})}>
            Done
          </button>
        </div>
      )
    }
  }

  componentDidUpdate() {
    // console.log(this.props.players);
  //   console.log(this.props.name);
  }

  render() {
    return(
      <section className="teamBuild">
        <h1 id="teams_header"> Make Your Team! </h1>
        <div className="teamContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="formRow">
              <label>Team 1 Name: </label>
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
            {this.stopMessage()}
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {players: state.team1Players, name: state.teamOneName}
}

export default connect(mapStateToProps, {addTeammates})(TeamBuild);
