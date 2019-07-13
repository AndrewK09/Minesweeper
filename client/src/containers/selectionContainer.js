import { connect } from 'react-redux';
import Selection from '../components/Selection.jsx';
import handleLevel from '../actions/handleLevel.js';

const mapStateToProps = state => ({
  level: state.level
});

const mapDispatchToProps = dispatch => ({
  updateLevel: level => {
    dispatch(handleLevel(level));
  }
});

const SelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Selection);

export default SelectionContainer;
