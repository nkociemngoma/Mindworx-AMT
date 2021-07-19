import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  logo  from "./m-logo.png";

class LearnerPortal extends Component {
    render (){
        return(
            <div>

                <div>
                <div className="navbar">
                    <div className="logo">
                        <Link to ="/Home" >
                                <img src = {logo} width="300" height="80" />
                            </Link>
                        </div>
                        <div class="topnav" id="myTopnav">
                            <Link to ="/profile"id="a">My Profile</Link>
                            <Link to ="/" id="a">Log Out</Link>
                        </div>
                    </div>
                </div>

                <div className="sidenav">
                    <div className="log-req">
                        <a href="#"class="active">Log Request</a>
                    </div>
                    <div className="rep-issues">
                        <a href="#">Report issue</a>
                    </div>
                    <div className="status">
                        <a href="#">Status</a>
                    </div>
                </div>
                        
                <div className= "main-content">
                    <div class="container2">
                        <label for="fname">request:</label>
                        <input type="text" id="request" name="request"/>
                        <label for="lname">message:</label>
                        <input type="text" id="message" name="message"/>
                        <button type="submit"class="btnSubmit">submit</button>

                    </div>
                </div>
                </div>
            
                           

        )
    }
}

export default LearnerPortal