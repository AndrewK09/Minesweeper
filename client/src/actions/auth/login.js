import { HANDLE_LOGIN } from '../types.js';
import axios from 'axios';

const handleLogin = () => (dispatch, getState) => {
  axios.get('/api/current_user').then(({ data }) => {
    dispatch({
      type: HANDLE_LOGIN,
      payload: data._id
    });
  });
};

export default handleLogin;
