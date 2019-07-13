import { HANDLE_STOP } from './types.js';

const handleStop = () => ({
  type: HANDLE_STOP,
  payload: false
});

export default handleStop;
