import { HANDLE_TIMER, HANDLE_STOP } from '../actions/types.js';

const handleTimer = (
  // state = { min: 0, sec: 0, count: true },
  state = { sec: 0, count: false },
  { type, payload }
) => {
  switch (type) {
    case HANDLE_TIMER:
      return payload;
    case HANDLE_STOP:
      let newCount = Object.assign({}, state);
      newCount.count = false;
      return newCount;
    default:
      return state;
  }
};

export default handleTimer;
