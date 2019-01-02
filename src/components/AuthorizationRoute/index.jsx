import React from 'react';
import { Redirect } from 'react-router-dom';
import { getTokenItem } from '../../localStorage';

const withAuthorizationRoute = WrappedComponent => {
  if (!getTokenItem()) {
    return <Redirect to="/" />;
  }

  return <WrappedComponent />;
};

export default withAuthorizationRoute;
