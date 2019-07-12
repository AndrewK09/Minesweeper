import { connect } from 'react-redux';
import Board from '../components/Board.jsx';
import handleClick from '../actions/handleClick.js';
import handleLoss from '../actions/handleLoss.js';
// import startBoard from '../actions/board.js';
import handleReset from '../actions/handleReset.js';
const mapStateToProps = store => ({
  board: store.board,
  loss: store.loss
});

const mapDispatchToProps = dispatch => ({
  updateToggles: (col, row) => {
    dispatch(handleClick(col, row));
  },
  updateLoss: () => {
    dispatch(handleLoss());
  },
  restartBoard: () => {
    dispatch(handleReset());
  }
});

const boardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default boardContainer;
