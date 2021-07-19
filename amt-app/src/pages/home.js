import React from "react";
import { Link } from "react-router-dom";
import  logo  from "./m-logo.png";

const Homepage = () => {
    return (
        <div>
    <div className="navbar">
                <div className="logo">
                <Link to ="/" >
                        <img src = {logo} width="300" height="80" />
                    </Link>
                </div>
                <div class="topnav" id="myTopnav">
                    
                    <Link to ="/learnerPortal" id="a">Leaner's Portal</Link>
                    <Link to ="/profile"id="a">My Profile</Link>
                    <Link to ="/" id="a">Log Out</Link>
                    <a href ="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                    
                    </div>
                    
                </div>

                <h3>Welcome to the landing MainPage</h3>
                </div>
        
    );
}

export default Homepage;