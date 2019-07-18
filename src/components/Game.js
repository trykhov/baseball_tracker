import React from 'react';
import '../css/game.css';
import empty from '../img/empty_bases.png';
import bunt from '../img/bunt_cup.png';
import single from '../img/single.png';
import double from '../img/double.png';
import triple from '../img/triple.png';
import homerun  from '../img/homerun.png';


class Game extends React.Component {

  state = {
    first: false,
    second: false,
    third: false,
    score: {
      team1: 0,
      team2: 0,
    },
    inning: {
      top: true,
      bottom: false,
      num: 1
    },
    outs: 0,
    strikes: 0
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
            <label> Inning: <i class="angle up icon"></i>{this.state.inning.num}</label>
            <label> Strikes: {this.state.strikes} </label>
            <label> Outs: {this.state.outs} </label>
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
          <button id="strike" class="ui button">STRIKE!</button>
          <button id="out" class="ui button">OUT!</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Game;
