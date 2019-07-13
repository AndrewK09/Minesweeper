import { HANDLE_TIMER, HANDLE_STOP } from '../actions/types.js';

const handleTimer = (
  // state = { min: 0, sec: 0, count: true },
  state = { sec: 0, count: false },
  { type, payload }
) => {
  switch (type) {
    case HANDLE_TIMER:
      // let newTime = Object.assign({}, state);
      // newTime.min = payload.min;
      // newTime.sec = payload.sec;
      // if (payload.count) {
      //   newTime.count = true;
      // }
      // return newTime;
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
