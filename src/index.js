import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Team1Build from './components/Team1Build';
import Team2Build from './components/Team2Build';
import Game from './components/Game';
import GameEnd from './components/GameEnd';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
        <Route path="/" component={App} exact/>
        <Route path="/team1_build" component={Team1Build} />
        <Route path="/team2_build" component={Team2Build} />
        <Route path="/play_ball" component={Game} />
        <Route path="/game_over" component={GameEnd} />
    </HashRouter>
  </Provider>,
  document.querySelector("#root")
);
