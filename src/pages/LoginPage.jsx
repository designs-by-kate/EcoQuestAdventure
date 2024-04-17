import React from 'react';
import MainImage from '../assets/login.png'; 
import './Login.css'; 

function Login() {
  return (
    <div className="loginContainer">
      <h1>LOGIN</h1>
      <div className="login-image-container">
        <img src={MainImage} alt="Main Image" className="login-main-image" />
      </div>
      <div className="login-form-container">
        <form>
          <div className="login-form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder='username...'/>
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder='password...'/>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
