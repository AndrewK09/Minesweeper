import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar.jsx';
import handleReset from '../actions/handleReset.js';
import stopTimer from '../actions/stopTimer.js';
import handleLogin from '../actions/auth/login.js';
import getRanks from '../actions/getRank.js';
import toggleFlag from '../actions/flag.js';
const mapStateToProps = store => ({
  game: store.game,
  auth: store.auth,
  ranks: store.ranks,
  flag: store.flag
});

const mapDispatchToProps = dispatch => ({
  restartBoard: () => {
    dispatch(handleReset());
  },
  stopTime: () => {
    dispatch(stopTimer());
  },
  handleLogin: () => {
    dispatch(handleLogin());
  },
  updateRanks: () => {
    dispatch(getRanks());
  },
  toggleFlag: () => {
    dispatch(toggleFlag());
  }
});

const sidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default sidebarContainer;
