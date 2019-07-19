import React from 'react';
import { connect } from 'react-redux';
import { newInning, strike, youreOut, hit, changeArrow } from '../actions';
import '../css/game.css';
import bunt from '../img/bunt_cup.png';
import single from '../img/single.png';
import double from '../img/double.png';
import triple from '../img/triple.png';
import homerun  from '../img/homerun.png';
import FieldImage from './FieldImage';


class Game extends React.Component {

  inningArrow = () => {
    if(this.props.topOrBottom) {
      return <i className="angle up icon"></i>
    }
    return <i className="angle down icon"></i>
  }

  strikeOut = () => { // keeps track of strikes and outs
    if(this.props.strikes === 2) {
      this.getOut();
    } else {
      this.props.strike();
    }
  }

  getOut = () => { // keeps track of the outs
    let count = this.props.strikes;
    while(count < 3) {
      this.props.strike();
      count += 1;
    }
    if(this.props.outs === 2) {
      if(!this.props.topOrBottom) {
        this.props.newInning();
      }
      this.props.changeArrow();
      this.batterHit(0, false, true);
    }
    this.props.youreOut();
  }

  batterHit = (num, bunt = false, clear = false) => {
    // implement a rotating array algorithm for the bases
    // when a player "hits", then they move to the num of bases
    // everyone before num moves up by num, everyone after num moves up by 1
    num = bunt ? 1 : num;
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
    newBase[1] = bunt ? false : newBase[1];
    newBase = clear ? newBase.fill(false) : newBase;
    this.props.hit(newBase);
  }

  bunt = () => {
    if(this.props.outs < 2) {
      this.batterHit(1, true);
    }
    this.getOut();
  }



  // for testing only
  // console.log() runs faster than the change of state
  componentDidUpdate() {
    // console.log(this.props.team1);
    // console.log(this.props.team2);
    // console.log(this.props.bases);
    console.log(this.props.topOrBottom);
  }

  render() {
    return (
      <section id="field">
        <div id="fieldContainer">
          <div id="score">
            <label style={{color: "red"}}>Team 1: </label>
            <label style={{color: "blue"}}>Team 2: </label>
          </div>
          <FieldImage />
          <div id="info">
            <label> Inning: {this.inningArrow()}{this.props.inning}</label>
            <label> Strikes: {this.props.strikes} </label>
            <label> Outs: {this.props.outs} </label>
          </div>
          <div id="batter">
            <p> Batter Up! </p>
            <p> Batter Name </p>
          </div>
          <div id="hits">
            <img className="shots" src={bunt} onClick={() => this.bunt()} alt="points"/>
            <img className="shots" src={single} onClick={() => this.batterHit(1, false, false)} alt="points"/>
            <img className="shots" src={double} onClick={() => this.batterHit(2, false, false)} alt="points"/>
            <img className="shots" src={triple} onClick={() => this.batterHit(3, false, false)} alt="points"/>
            <img className="shots" src={homerun} onClick={() => this.batterHit(4, false, false)} alt="points"/>
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
    topOrBottom: state.inDirection,
    inning: state.inning,
    team1: state.team1Players,
    team2: state.team2Players,
    strikes: state.strikes,
    outs: state.outs,
    bases: state.onBase
  }
}

export default connect(mapStateToProps, {newInning, strike, youreOut, hit, changeArrow})(Game);
