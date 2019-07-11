import { combineReducers } from 'redux';

import startBoard from './board.js';

const rootReducer = combineReducers({
  board: startBoard
});

export default rootReducer;
