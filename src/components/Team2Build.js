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

  }

  render() {
    console.log(this.state.teamName);
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Team 2 Name: </label>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="ui input focus" data-children-count="1">
                    <input type="text" placeholder="Team Name" onChange={this.changeTeamName} value={this.teamName}/>
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
                    <input type="text" placeholder="Player Name" />
                    <button className="ui icon button">
                      <i className="plus square outline icon"></i>
                    </button>
                  </div>
                </td>
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
