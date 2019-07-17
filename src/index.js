import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import CreateTeams from './components/CreateTeams';
import Team1Build from './components/Team1Build';
import Team2Build from './components/Team2Build';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} exact/>
        <Route path="/create_teams" component={CreateTeams} />
        <Route path="/team1_build" component={Team1Build} />
        <Route path="/team2_build" component={Team2Build} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
