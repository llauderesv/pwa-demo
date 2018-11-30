import React from 'react';
import { Link } from 'react-router-dom';

const App = _ => {
  return (
    <div className="jumbotron">
      <h3 className="display-3">PWA Demo</h3>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
      </p>
      <p className="lead">
        <Link className="btn btn-lg btn-primary" to="/login">
          Click here to Sign In
        </Link>
      </p>
    </div>
  );
};

export default App;
