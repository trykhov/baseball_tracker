import React from 'react';
import { connect } from 'react-redux';
import { addTeammates } from '../actions';

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
    this.props.addTeammates("TEAM_1", this.state.playerName)
    this.setState({
      playerName: ''
    })
  }

  showRoster = list => {
    const currRoster = list.map(player => {
      return(
        <div key={player}>
          {player}
        </div>
      )
    });
    return currRoster
  }

  render() {
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Team 1 Name: </label>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="ui input focus" data-children-count="1">
                    <input type="text" placeholder="Team Name" onChange={this.changeTeamName} value={this.state.teamName}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Players: </label>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="ui input focus" data-children-count="1">
                    <input type="text" placeholder="Player Name" onChange={this.changePlayerName} value={this.state.playerName}/>
                    <button className="ui icon button">
                      <i className="plus square outline icon"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{this.showRoster(this.props.players)}</td>
              </tr>
              <tr>
                <td>
                  <button id="done"> Done </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {players: state.team1Players}
}

export default connect(mapStateToProps, {addTeammates})(TeamBuild);
