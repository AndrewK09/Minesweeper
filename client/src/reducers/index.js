import { combineReducers } from 'redux';

import startBoard from './board.js';
import handleLoss from './handleLoss.js';

const rootReducer = combineReducers({
  board: startBoard,
  loss: handleLoss
});

export default rootReducer;
