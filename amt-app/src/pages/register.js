import React from "react";
import { Link } from "react-router-dom";
import  loginImg  from "./m-logo.png";

class Register extends React.Component {
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
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
        <Link to ="/editProfile" id="a">
          <button type="button" className="btn">
            Register
          </button>
          </Link>
          <br />
          <Link to ="/login"id="a">
          <button type="button" className="btn"> 
               I have an account 
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

export default Register;