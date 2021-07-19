import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import  logo  from "./m-logo.png";


function Profile() {
  return (
      <div >
          <div className="navbar">
                <div className="logo">
                <Link to ="/Home" >
                        <img src = {logo} width="300" height="80" />
                    </Link>
                </div>
                <div class="topnav" id="myTopnav">
                    <Link to ="/learnerPortal" id="a">Leaner's Portal</Link>
                    <Link to ="/" id="a">Log Out</Link>
                    <a href ="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                    </div>
                    </div>
    <div className="Card">
      <div className="upper-container"></div>
      <div className="lower-container">
        <h1> Alisha Smith </h1>
        <h2> Systems Development </h2>
        <h3> Female </h3>
        <h4> 4 Sesame Street, Soweto </h4>
        <h5>9712124055987</h5>
        <h6>Mother, 0845899263 </h6>
        <Link to ="/editProfile" >
        <button>Edit Profile</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Profile;