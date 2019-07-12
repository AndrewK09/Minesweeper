import { combineReducers } from 'redux';

import startBoard from './board.js';
import test from './test.js';
const rootReducer = combineReducers({
  board: startBoard
});

export default rootReducer;
