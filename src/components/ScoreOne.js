import React from 'react';
import { connect } from 'react-redux';


class ScoreOne extends React.Component {

  render() {
    return <label style={{color: "red"}}>{this.props.teamOneName}: {this.props.oneScore}</label>
  }

}

const mapStateToProps = state => {
  return {
    oneScore: state.oneScore,
    teamOneName: state.teamOneName
  }
}

export default connect(mapStateToProps)(ScoreOne);
