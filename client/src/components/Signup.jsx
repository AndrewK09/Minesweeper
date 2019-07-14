import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <div className='sub-container'>
        <div className='login'>
          <div className='form'>
            <form className='login-form'>
              <fieldset>
                <legend>Sign up</legend>
                <label>Username:</label>
                <br />
                <input type='text' />
                <br />
                <label>Password:</label>
                <br />
                <input type='password' />
                <br />
                <button className='login-submit' type='submit'>
                  Sign up
                </button>
                <br />
                <div className='separator'>OR</div>
                <div className='google'>
                  <a href='/auth/google'>Log in with Google</a>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
