/**
 * Place all reducers here..
 */
import { combineReducers } from 'redux';

import todos from '../reducers/todos';
import signIn from '../reducers/signIn';

const store = combineReducers({ signIn, todos });

export default store;
