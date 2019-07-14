import { TOGGLE_FLAG } from './types.js';

const toggleFlag = () => ({
  type: TOGGLE_FLAG,
  payload: true
});

export default toggleFlag;
