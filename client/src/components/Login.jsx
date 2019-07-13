import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className='sub-container'>
        <div className='login'>
          <div className='form'>
            <form>
              <input type='text' />
            </form>
            <button>
              <a href='/auth/google'>Login with Google</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
