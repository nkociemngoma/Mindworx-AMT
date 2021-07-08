import React from "react";
import { Link } from "react-router-dom";
import  logo  from "./m-logo.png";

const Login = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                <Link to ="/" >
                        <img src = {logo} width="300" height="80" />
                    </Link>
                </div>
                <div class="topnav" id="myTopnav">
                    <Link to ="/" id="a">Home</Link>
                    <Link to ="/Users" id="a">Users</Link>
                    <Link to ="/login" class="active" id="a">Login</Link>
                    <Link to ="/register" id="a">Register</Link>
                    <a href ="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                    </div>
                    
                </div>
            <h2>Welcome to the login page</h2>
        </div>
        
    );
}

export default Login;