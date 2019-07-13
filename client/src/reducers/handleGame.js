import { HANDLE_LOSS, HANDLE_RESET, HANDLE_WIN } from '../actions/types.js';

const handleGame = (state = null, { type, payload }) => {
  switch (type) {
    case HANDLE_LOSS:
      return 'lose';
    case HANDLE_RESET:
      return null;
    case HANDLE_WIN:
      if (payload) return 'win';
    default:
      return state;
  }
};

export default handleGame;
