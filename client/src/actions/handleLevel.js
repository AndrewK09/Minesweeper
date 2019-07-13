import { HANDLE_LEVEL } from './types.js';

const handleLevel = level => ({
  type: HANDLE_LEVEL,
  payload: level
});

export default handleLevel;
