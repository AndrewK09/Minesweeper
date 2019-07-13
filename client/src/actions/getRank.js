import { GET_RANKS } from './types.js';
import axios from 'axios';
const getRanks = () => (dispatch, getState) => {
  //axios get request
  axios.get('/ranks').then(({ data }) => {
    dispatch({
      type: GET_RANKS,
      payload: data
    });
  });
};

export default getRanks;
