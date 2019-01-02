import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withAuthorizationRoute from './AuthorizationRoute';
import App from './App';
import TodoApp from './TodoApp';
import SignUp from './SignUp';

import '../assets/styles/bootstrap.scss';
import '../assets/styles/main.scss';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route
            path="/todo"
            exact
            render={() => withAuthorizationRoute(TodoApp)}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
