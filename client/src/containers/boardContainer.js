import { connect } from 'react-redux';
import Board from '../components/Board.jsx';
import handleClick from '../actions/handleClick.js';
import handleLoss from '../actions/handleLoss.js';
import handleWin from '../actions/handleWin.js';
import handleTimer from '../actions/handleTimer.js';
import handleBoard from '../actions/handleBoard.js';

const mapStateToProps = store => ({
  board: store.board,
  game: store.game,
  time: store.time,
  size: store.size,
  level: store.level,
  auth: store.auth,
  flag: store.flag
});

const mapDispatchToProps = dispatch => ({
  updateMines: (col, row) => {
    dispatch(handleClick(col, row));
  },
  updateLoss: () => {
    dispatch(handleLoss());
  },
  updateWin: () => {
    dispatch(handleWin());
  },
  updateTime: time => {
    dispatch(handleTimer(time));
  },
  handleBoard: (height, width, bombs) => {
    dispatch(handleBoard(height, width, bombs));
  }
});

const boardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default boardContainer;
