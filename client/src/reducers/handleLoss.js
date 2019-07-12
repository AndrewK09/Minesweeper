import { SHOW_LOSS, HANDLE_RESET } from '../actions/types.js';

const handleLoss = (state = null, { type }) => {
  switch (type) {
    case SHOW_LOSS:
      return true;
    case HANDLE_RESET:
      return false;
    default:
      return state;
  }
};

export default handleLoss;
