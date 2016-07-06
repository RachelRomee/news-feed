import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/:category" component={App} />
    <Route path="*" component={App} />
  </Router>
, document.getElementById('root'));
