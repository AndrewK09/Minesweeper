import { HANDLE_LOSS, HANDLE_RESET, HANDLE_WIN } from '../actions/types.js';
import store from '../store.js';
// add size and bombs prop
const hasWon = board => {
  for (let row of board) {
    for (let square of row) {
      //if it's not a bomb and it isn't toggled => no win
      if (!square.bomb && !square.toggled) {
        return false;
      }
    }
  }
  //if all squares that aren't bombs were toggled
  return true;
};

const handleGame = (state = null, { type, payload }) => {
  switch (type) {
    case HANDLE_LOSS:
      return 'lose';
    case HANDLE_RESET:
      return null;
    case HANDLE_WIN:
      if (hasWon(payload)) return 'win';
    default:
      return state;
  }
};

export default handleGame;
