import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import CreateTeams from './components/CreateTeams';
import TeamBuild from './components/TeamBuild';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} exact/>
        <Route path="/create_teams" component={CreateTeams} />
        <Route path="/team_build" component={TeamBuild} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
