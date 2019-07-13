import { connect } from 'react-redux';
import Login from '../components/Login.jsx';
import handleLogin from '../actions/auth/login.js';

const mapStateToProps = store => ({
  auth: store.auth
});

const mapDispatchToProps = dispatch => ({
  handleLogin: () => {
    dispatch(handleLogin());
  }
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
