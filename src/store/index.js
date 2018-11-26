/**
 * Put all the reducers here..
 */
import { combineReducers } from 'redux';
import { increment } from '../reducers/increment';

const store = combineReducers({ increment });

export default store;
