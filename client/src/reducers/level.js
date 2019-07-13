import { HANDLE_LEVEL } from '../actions/types.js';

const handleLevel = (state = 'beginner', { type, payload }) => {
  switch (type) {
    case HANDLE_LEVEL:
      return payload;
    default:
      return state;
  }
};

export default handleLevel;
