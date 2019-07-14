import { TOGGLE_FLAG } from './types.js';

const toggleFlag = reset => ({
  type: TOGGLE_FLAG,
  payload: reset
});

export default toggleFlag;
