import { connect } from 'react-redux';
import Header from '../components/Header.jsx';

const mapStateToProps = store => ({
  auth: store.auth
});

const mapDispatchToProps = dispatch => ({});

const HeaderContainer = connect(
  mapStateToProps,
  null
)(Header);

export default HeaderContainer;
