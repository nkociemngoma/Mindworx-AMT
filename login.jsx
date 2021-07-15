import React from "react";
import loginImg from "../../mindworx-logo.png";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
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
          <button type="button" className="btn">
            Log In
          </button>
        </div>
      </div>
    );
  }
}
