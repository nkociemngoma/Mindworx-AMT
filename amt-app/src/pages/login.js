import React from "react";
import { Link } from "react-router-dom";
import  loginImg  from "./m-logo.png";

class Login extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
    return (
        <div className="super-containter">
        <div className="login">
        <div className="container">
        <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
          <Link to ="/" >
                        <img src = {loginImg} width="300" height="80" />
                    </Link>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="forgot-password">
          <label htmlFor="Password retreat"></label>
          <a href=""> Forgot Password?</a>
        </div>
        <div className="footer">
        <Link to ="/Home" id="a">
          <button type="button" className="btn">
            Log In
          </button>
          </Link>
          <br />
          <Link to ="/register" id="a">
          <button type="button" className="btn"> 
          I don't have an account 
          </button>
          </Link>
        </div>
      </div>
      </div>
      </div>
      </div>
        
    );

    }
}


export default Login;