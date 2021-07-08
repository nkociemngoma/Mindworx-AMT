import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <div class="topnav" id="myTopnav">
                <Link to ="/" class="active">Home</Link>
                <Link to ="/Users" id="a">Users</Link>
                <Link to ="/login" id="a">Login</Link>
                <Link to ="/register" class="active" id="a">Register</Link>
                <a href ="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
                </div>
            <h2>Welcome to the home page</h2>
        </div>
        
    );
}

export default Homepage;