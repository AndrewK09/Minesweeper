import { connect } from 'react-redux';
import Board from '../components/Board.jsx';
import handleClick from '../actions/handleClick.js';
import handleLoss from '../actions/handleLoss.js';
import handleWin from '../actions/handleWin.js';
import handleReset from '../actions/handleReset.js';
const mapStateToProps = store => ({
  board: store.board,
  game: store.game
});

const mapDispatchToProps = dispatch => ({
  updateMines: (col, row) => {
    dispatch(handleClick(col, row));
  },
  updateLoss: () => {
    dispatch(handleLoss());
  },
  restartBoard: () => {
    dispatch(handleReset());
  },
  updateWin: () => {
    dispatch(handleWin());
  }
});

const boardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default boardContainer;
