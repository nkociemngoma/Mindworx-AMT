import React from "react";
import { Link } from "react-router-dom";
import  logo  from "./m-logo.png";

const UsersPage = () => {
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
                    <Link to ="/Users" class="active" id="a">Users</Link>
                    <Link to ="/login"id="a">Login</Link>
                    <Link to ="/register" id="a">Register</Link>
                    <a href ="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                    </div>
                    
                </div>
            <ul>
                {["Alex", "Jon", "Pes", "Menzi", "Syd"].map((user, idx) => {
                    return <li key={idx}>{user}</li>
                })}
            </ul>
        </div>
        
    );
}

export default UsersPage;