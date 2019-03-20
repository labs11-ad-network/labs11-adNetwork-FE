import React from 'react'
import { Link } from 'react-router-dom';

import { Form } from '../authenticationStyles.js'
import Oauth from '../../social-login/Oauth';

export const LoginForm = props => {
  return (
    <Form onSubmit={props.login}>
      <div>
        <h2>Login with your information.</h2>
        <label htmlFor="email" />
        <input
          type="text"
          value={props.userInfo.email}
          onChange={props.handleChange}
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password" />
        <input
          type="password"
          value={props.userInfo.password}
          onChange={props.handleChange}
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>

        <h3>Don't have an account? <Link to="/register">Register.</Link></h3>
      </div>
    </Form>
  )
}

export const RegisterForm = props => {
  return (
    <Form onSubmit={props.register}>
      <div>
        <h2>Register with your information.</h2>
        <label htmlFor="email" />
        <input
          type="email"
          value={props.userInfo.email}
          onChange={props.handleChange}
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password" />
        <input
          type="password"
          value={props.userInfo.password}
          onChange={props.handleChange}
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <label htmlFor="first_name" />
        <input
          type="text"
          value={props.userInfo.first_name}
          onChange={props.handleChange}
          name="first_name"
          id="first_name"
          placeholder="First Name"
          required
        />
        <label htmlFor="last_name" />
        <input
          type="text"
          value={props.userInfo.last_name}
          onChange={props.handleChange}
          name="last_name"
          id="last_name"
          placeholder="Last Name"
          required
        />
        <label htmlFor="phone" />
        <input
          type="tel"
          value={props.userInfo.phone}
          onChange={props.handleChange}
          name="phone"
          id="phone"
          placeholder="Phone"
          required
        />
        <button type="submit">Register</button>
        {/* ------------ OAUTH ------------------- */}
        <br />
        <br />
        <Oauth />

        <h3>Already have an account? <Link to="/login">Login.</Link></h3>
      </div>
    </Form>
  )
}