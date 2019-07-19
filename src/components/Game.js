import React from 'react';
import { connect } from 'react-redux';
import { newInning, strike, youreOut, hit } from '../actions';
import '../css/game.css';
import empty from '../img/empty_bases.png';
import bunt from '../img/bunt_cup.png';
import single from '../img/single.png';
import double from '../img/double.png';
import triple from '../img/triple.png';
import homerun  from '../img/homerun.png';


class Game extends React.Component {

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

  batterHit = (num) => {
    let newBase = this.props.bases.slice(0);
    let hold = new Array(4).fill(false);
    newBase[0] = true;
    for(let i = 0; i < hold.length; i++) {
      if(i + num < 4) {
        hold[(i + num) % hold.length] = newBase[i];
      }
    }
    for(let i = 0; i < hold.length; i++) {
        newBase[i] = hold[i];
    }
    this.props.hit(newBase);
  }

  componentDidUpdate() {
    console.log(this.props.bases);
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
            <img className="shots" src={single} onClick={() => this.batterHit(1)}/>
            <img className="shots" src={double} onClick={() => this.batterHit(2)}/>
            <img className="shots" src={triple} onClick={() => this.batterHit(3)}/>
            <img className="shots" src={homerun} onClick={() => this.batterHit(4)}/>
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
    outs: state.outs,
    bases: state.onBase
  }
}

export default connect(mapStateToProps, {newInning, strike, youreOut, hit})(Game);
