import { HANDLE_LOGIN } from '../types.js';
import axios from 'axios';

const handleLogin = () => (dispatch, getState) => {
  axios.get('/currentUser').then(({ data }) => {
    dispatch({
      type: HANDLE_LOGIN,
      payload: { id: data._id, username: data.username }
    });
  });
};

export default handleLogin;
