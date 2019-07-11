import ADD_BOMBS from './types.js';

const addBombs = num => {
  return {
    type: ADD_BOMBS,
    payload: makeBombs(num)
  };
};
