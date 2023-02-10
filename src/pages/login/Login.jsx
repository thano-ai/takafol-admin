import React from "react";
import "./login.scss";
import wave from "./img/pattern (1).svg" ;
import logo from "./img/logo.jpg" ;
import logo2 from "./img/logo2.jpg" ;
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <img src={logo} />
        </div>
        <div className="login-content">
          <form action="">
            
            <h2 className="title">Welcome Back</h2>
            <div className="input-div">
              
                <label>Username</label>
                <input required type="text" className="input" />
              
            </div>
            <div className="input-div">
                <label>Password</label>
                <input required type="password" className="input" />
            </div>

            <a href="#">Forgot Password?</a>
            <Link to="/" style={{textDecoration:"none"}}><input type="submit" className="btn" value="Login" /></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
