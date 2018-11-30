/**
 * Put all the reducers here..
 */
import { combineReducers } from 'redux';
import player from '../reducers/player';

const store = combineReducers({ player });

export default store;
