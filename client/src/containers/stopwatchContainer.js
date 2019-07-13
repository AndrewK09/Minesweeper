import { connect } from 'react-redux';
import Stopwatch from '../components/Stopwatch.jsx';
import handleTimer from '../actions/handleTimer.js';

const mapStateToProps = store => ({
  time: store.time
});

const mapDispatchToProps = dispatch => ({
  updateTime: time => {
    dispatch(handleTimer(time));
  }
});

const StopwatchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stopwatch);

export default StopwatchContainer;
