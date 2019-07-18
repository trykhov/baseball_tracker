import React from 'react';
import { connect } from 'react-redux';
import { newInning, strike, youreOut } from '../actions';
import '../css/game.css';
import empty from '../img/empty_bases.png';
import bunt from '../img/bunt_cup.png';
import single from '../img/single.png';
import double from '../img/double.png';
import triple from '../img/triple.png';
import homerun  from '../img/homerun.png';


class Game extends React.Component {

  state = {
    bases: {first: false, second: false, third: false },
    score: { team1: 0, team2: 0,},
    curr_inning: { top: true, bottom: false, num: 1 },
    outs: 0,
    strikes: 0
  }

  strikeOut = () => { // keeps track of strikes and outs
    if(this.props.strikes == 2) {
      this.props.youreOut();
    }
    this.props.strike();
  }

  getOut = () => { // keeps track of the outs
    let count = this.props.strikes;
    while(count < 3) {
      this.props.strike();
      count += 1;
    }
    if(this.props.outs == 2) {
      this.props.newInning();
    }
    this.props.youreOut();
  }

  render() {
    return (
      <section id="field">
        <div id="fieldContainer">
          <div id="score">
            <label style={{color: "red"}}>Team 1: </label>
            <label style={{color: "blue"}}>Team 2: </label>
          </div>
          <div id="field_status">
            <img className="bases" src={empty} />
          </div>
          <div id="info">
            <label> Inning: <i className="angle up icon"></i>{this.props.inning}</label>
            <label> Strikes: {this.props.strikes} </label>
            <label> Outs: {this.props.outs} </label>
          </div>
          <div id="batter">
            <p> Batter Up! </p>
            <p> Batter Name </p>
          </div>
          <div id="hits">
            <img className="shots" src={bunt}/>
            <img className="shots" src={single}/>
            <img className="shots" src={double}/>
            <img className="shots" src={triple}/>
            <img className="shots" src={homerun}/>
          </div>
          <div id="miss">
            <button id="strike" className="ui button" onClick={this.strikeOut}>STRIKE!</button>
            <button id="out" className="ui button" onClick={this.getOut}>OUT!</button>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    inning: state.inning,
    team1: state.team1Players,
    team2: state.team2Players,
    strikes: state.strikes,
    outs: state.outs
  }
}

export default connect(mapStateToProps, {newInning, strike, youreOut})(Game);
