import { SHOW_BOMBS } from './types.js';

const handleLoss = () => dispatch => {
  dispatch({
    type: SHOW_BOMBS,
    payload: null
  });
  // dispatch({
  //   type: SHOW_LOSS,
  //   payload: true
  // });
};

export default handleLoss;
