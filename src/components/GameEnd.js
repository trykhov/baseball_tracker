import React from 'react';
import { connect } from 'react-redux';
import '../css/gameend.css';

class GameEnd extends React.Component {

  winner = () => {
    if(this.props.oneScore > this.props.twoScore) {
      return <p id="winner" style={{color: "red"}}> {this.props.teamOneName} Wins! </p>
    } else {
      return <p id="winner" style={{color: "blue"}}> {this.props.teamTwoName} Wins! </p>
    }
  }

  render(){
    return (
      <div id="gameEndContainer">
        {this.winner()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    oneScore: state.oneScore,
    teamOneName: state.teamOneName,
    teamTwoName: state.teamTwoName,
    twoScore: state.twoScore}
}

export default connect(mapStateToProps)(GameEnd);
