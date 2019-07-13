import { combineReducers } from 'redux';

import startBoard from './board.js';
import handleGame from './handleGame.js';
import handleTimer from './handleTimer.js';
import auth from './auth.js';
import ranks from './ranks';
const rootReducer = combineReducers({
  board: startBoard,
  game: handleGame,
  time: handleTimer,
  auth: auth,
  ranks: ranks
});

export default rootReducer;
