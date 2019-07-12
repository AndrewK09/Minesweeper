import { SHOW_BOMBS, HANDLE_LOSS } from './types.js';

const handleLoss = () => dispatch => {
  dispatch({
    type: SHOW_BOMBS,
    payload: null
  });
  dispatch({
    type: HANDLE_LOSS,
    payload: 'loss'
  });
};

export default handleLoss;
