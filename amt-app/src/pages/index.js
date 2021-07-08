import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import  logo  from "./m-logo.png";
import animation from "./ani-logo.gif";

const MainPage = () => {
    return (
        
        <div className = "main-one">
            <div className="navbar">
                <div className="logo">
                <Link to ="/" >
                        <img src = {logo} width="300" height="80" />
                    </Link>
                </div>
                <div class="topnav" id="myTopnav">
                    <Link to ="/" class="active" id="a">Home</Link>
                    <Link to ="/Users" id="a">Users</Link>
                    <Link to ="/login"id="a">Login</Link>
                    <Link to ="/register" id="a">Register</Link>
                    <a href ="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                    </div>
                    
                </div>
                <div className="animation">
                    <img src = {animation} width="1400" height="700" />
                </div>

        </div>
        
    );
}

export default MainPage;