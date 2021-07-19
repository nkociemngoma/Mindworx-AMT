import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import  logo  from "./m-logo.png";

const EditProfile = () => {
  return (
      <div>
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
    <form>
      <div className="base-container1">
        <div className="content1">
          <span></span>
          
          <div className="form">
            <div className="form-group1">
              <div className="name">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="name" />
              </div>
              <div className="surname">
                <label htmlFor="surname">Surname: </label>
                <input type="text" name="surname" placeholder="surname" />
              </div>
            </div>
            <div className="form-group2">
                <div className="gender">
                    <label htmlFor="gender">Gender: </label>
                    <input type="text" name="gender" placeholder="gender" />
                </div>
                <div className="id-no">
                    <label htmlFor="ID">ID no: </label>
              <input type="text" name="ID" placeholder="ID" />
                </div>
              
            </div>
            <div className="form-group3">
                <div className="st-address">
                    <label htmlFor="Address">Street Address: </label>
                    <input type="text" name="Address" placeholder="Address" />
                </div>
              
              <div className="suburb">
                  <label htmlFor="Suburb">Suburb: </label>
                    <input type="text" name="Suburb" placeholder="Suburb" />
              </div>
              
            </div>

            <div className="form-group3">
                <div className="city">
                    <label htmlFor="City">City: </label>
                    <input type="text" name="City" placeholder="City" />
                </div>
              
                <div className="zip-code">
                    <label htmlFor="Zipcode">Zip Code: </label>
                    <input type="text" name="ZipCode" placeholder="Zip Code" />
                </div>    
              
            </div>

            <div className="form-group4">
                <div className="programme">
                    <label htmlFor="Programme">Programme: </label>
                    <input type="text" name="Programme" placeholder="Programme" />
                </div>
                
                <div className="next-of-kin">
                    <label htmlFor="Nextofkin"> Next of kin: </label>
                    <input type="text" name="NextOfKin" placeholder="Next of kin" />
                </div>
              
            </div>
            <div className="form-group5">
            <Link to ="/profile" id="a"> 
              <button type="submit" value="Profile" className="btn">
                Submit
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
};

export default EditProfile