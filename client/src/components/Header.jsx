import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  //get auth from props
  renderLogin() {
    const { auth } = this.props;
    return auth.id ? (
      <li className='account'>
        <a href='/google/logout'>Log Out</a>
      </li>
    ) : (
      <li className='account'>
        <Link to='/login'>Log In</Link>
      </li>
    );
  }

  renderSignup() {
    const { auth } = this.props;
    if (!auth.id) {
      return (
        <li className='account'>
          <Link to='/signup'>Sign Up</Link>
        </li>
      );
    }
  }
  render() {
    return (
      <nav>
        <ul className='header'>
          <li className='home'>
            <Link to='/'>Home</Link>
          </li>
          {this.renderSignup()}
          {this.renderLogin()}
        </ul>
      </nav>
    );
  }
}
