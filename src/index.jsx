import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import App from './App.jsx';
import Landing from './Landing.jsx';

ReactDOM.render(

  <Router>
    <Switch>
      <Route path="/local/:location">
        <App />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </Router>,

  document.getElementById('app')
);