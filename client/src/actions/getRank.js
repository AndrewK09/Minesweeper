import { GET_RANKS } from './types.js';
import axios from 'axios';
const getRanks = () => (dispatch, getState) => {
  const { level } = getState();
  axios.get(`/ranks/${level}`).then(({ data }) => {
    dispatch({
      type: GET_RANKS,
      payload: data
    });
  });
};

export default getRanks;
