/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavBar = styled.header`
  position: fixed;
  display: flex;
  background-color: #0b6fb2;
  color: #ffffff;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1150px;
    margin: 15px auto;
    max-width: 95%;

    h1 {
      font-size: 1.5rem;
      font-weight: 800;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        background-color: unset;
        border: unset;
        font-size: 1rem;
        padding: 5px 10px;
        margin-left: 10px;
        border-radius: 4px;
        text-decoration: none;
        color: #ffffff;
        transition: 0.2s;
        &:hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
      .sign-up {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 5px 10px;
        border-radius: 4px;
        transition: 0.2s;
        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`;

class Navigation extends Component {
  render() {
    const { login, history, logout } = this.props;

    return (
      <NavBar>
        <div>
          <h1>Creepy Ads</h1>
          <nav>
            <button>Home</button>
            {!localStorage.id_token ? (
              <>
                <button onClick={() => login()}>Login</button>
                <button className="sign-up">Sign Up</button>
              </>
            ) : (
              <>
                <button onClick={() => history.push('/dashboard')}>
                  Dashboard
                </button>
                <button onClick={() => logout()} className="sign-up">
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </NavBar>
    );
  }
}
Navigation.propTypes = {
  history: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func,
};

export default Navigation;
