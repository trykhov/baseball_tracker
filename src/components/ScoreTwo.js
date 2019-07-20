import React from 'react';
import { connect } from 'react-redux';


class ScoreTwo extends React.Component {

  render() {
    return <label style={{color: "blue"}}>{this.props.teamTwoName}: {this.props.twoScore}</label>
  }

}

const mapStateToProps = state => {
  return {
    twoScore: state.twoScore,
    teamTwoName: state.teamTwoName}
}

export default connect(mapStateToProps)(ScoreTwo);
