import { connect } from 'react-redux';
import Board from '../components/Board.jsx';
import handleClick from '../actions/handleClick.js';
import handleLoss from '../actions/handleLoss.js';

const mapStateToProps = store => ({
  board: store.board
});

const mapDispatchToProps = dispatch => ({
  updateToggles: (col, row) => {
    dispatch(handleClick(col, row));
  },
  updateLoss: () => {
    dispatch(handleLoss());
  }
});

const boardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default boardContainer;
