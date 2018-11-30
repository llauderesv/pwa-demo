import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Login from '../containers/Login';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}
