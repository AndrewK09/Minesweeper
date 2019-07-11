import { connect } from 'react-redux';
import Board from '../components/Board.jsx';

const mapStateToProps = store => ({
  board: store.board
});

const boardContainer = connect(
  mapStateToProps,
  null
)(Board);

export default boardContainer;
