import { combineReducers } from 'redux';

import startBoard from './board.js';
import handleGame from './handleGame.js';
import handleTimer from './handleTimer.js';
import auth from './auth.js';
import ranks from './ranks';
import handleBoard from './handleBoard.js';
import handleLevel from './level.js';
import toggleFlag from './flag.js';
const rootReducer = combineReducers({
  board: startBoard,
  game: handleGame,
  time: handleTimer,
  auth: auth,
  ranks: ranks,
  size: handleBoard,
  level: handleLevel,
  flag: toggleFlag
});

export default rootReducer;
