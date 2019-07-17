import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateTeams from './components/CreateTeams';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} exact/>
      <Route path="/create_teams" component={CreateTeams} />

    </div>
  </BrowserRouter>, document.querySelector("#root")
);
