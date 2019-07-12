import { connect } from 'react-redux';
import Board from '../components/Board.jsx';
import handleClick from '../actions/handleClick.js';
const mapStateToProps = store => ({
  board: store.board
});

const mapDispatchToProps = dispatch => ({
  updateToggles: (col, row) => {
    dispatch(handleClick(col, row));
  }
});

const boardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default boardContainer;
