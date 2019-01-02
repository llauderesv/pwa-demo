import React from 'react';
import { Link } from 'react-router-dom';

import SignIn from '../containers/SignIn';
import Header from './Header';
import withConnectionState from './ConnectionState';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="jumbotron">
              <h3 className="display-2">Todo</h3>
              <h3 className="display-5">Your personalize Task management</h3>
              <br />
              <p className="lead">
                Don't have an account?{' '}
                <strong>
                  <Link to="/sign-up">Sign Up</Link>
                </strong>{' '}
                here.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <SignIn />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withConnectionState(App);
