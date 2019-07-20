import React from 'react';
import { connect } from 'react-redux';
// import { currBatterOne } from '../actions';

class CurrentBatter extends React.Component {

  batter = () => {
    let battingTeam = this.props.topOrBottom ? "TEAM_1" : "TEAM_2";
    if(battingTeam === "TEAM_1") {
      return <p style={{color: "red"}}>{this.props.team1[this.props.atBatOne]}</p>;
    } else {
      return <p style={{color: "blue"}}>{this.props.team2[this.props.atBatTwo]}</p>;
    }
  }

  render() {
    return <div> {this.batter()} </div>
  }
}

const mapStateToProps = state => {
  return {
    atBatOne: state.currBatOne,
    atBatTwo: state.currBatTwo,
    team1: state.team1Players,
    team2: state.team2Players,
    topOrBottom: state.inDirection
  }
}

export default connect(mapStateToProps)(CurrentBatter);
