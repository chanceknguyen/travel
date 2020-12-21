import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import Landing from './Landing';

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

  document.getElementById('app'),
);
