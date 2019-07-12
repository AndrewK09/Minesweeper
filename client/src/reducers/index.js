import { combineReducers } from 'redux';

import startBoard from './board.js';
import handleGame from './handleGame.js';

const rootReducer = combineReducers({
  board: startBoard,
  game: handleGame
});

export default rootReducer;
