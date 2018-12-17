/**
 * Put all the reducers here..
 */
import { combineReducers } from 'redux';

import player from '../reducers/player';
import alert from '../reducers/alert';

const store = combineReducers({ player, alert });

export default store;
