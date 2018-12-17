import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import TextField from '../TextField';
import Button from '../Button';
import Alert from '../../containers/Alert';

import './index.scss';

const Login = ({ isLoading, isLoggedIn, onClick, alertState }) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  return (
    <React.Fragment>
      {isLoggedIn && <Redirect to="/main" />}

      <div className="jumbotron">
        <div className="display-3">
          <h2 style={{ textAlign: 'center' }}>
            A place where Shopping is Free.
          </h2>
        </div>
      </div>
      <div className="login-container">
        {alertState && <Alert />}
        <form>
          <fieldset>
            <legend>Sign In</legend>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <TextField
                ref={emailRef}
                value="test@email.com"
                type="email"
                className="form-control"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <TextField
                ref={passwordRef}
                type="password"
                className="form-control"
                name="password"
                value="test@email.com"
              />
            </div>
            <Button
              style={{ cursor: `${isLoading ? 'not-allowed' : 'pointer'}` }}
              disabled={`${isLoading ? 'disabled' : ''}`}
              className="btn btn-lg btn-primary btn-block"
              name="login"
              type="submit"
              onClick={e => {
                e.preventDefault();
                onClick(emailRef.current.value, passwordRef.current.value);
              }}
            >
              Sign In
            </Button>
          </fieldset>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
