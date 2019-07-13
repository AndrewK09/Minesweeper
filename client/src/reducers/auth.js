import { HANDLE_LOGIN } from '../actions/types.js';

const auth = (state = false, { type, payload }) => {
  switch (type) {
    case HANDLE_LOGIN:
      return payload ? payload : state;
    default:
      return state;
  }
};

export default auth;
