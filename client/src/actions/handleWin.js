import { HANDLE_WIN } from './types.js';
import getRank from './getRank.js';
import Axios from 'axios';

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

const handleWin = () => (dispatch, getState) => {
  let { board, time } = getState();
  dispatch({
    type: HANDLE_WIN,
    payload: hasWon(board)
  });
  if (hasWon(board)) {
    Axios.post('/ranks', { sec: time.sec })
      .then(() => {
        dispatch(getRank());
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default handleWin;
