import React, { Component } from 'react';
import ReactDOM from 'react-dom';





class reportissue extends Component {
    render (){
        return(     
           <div><div class= "container3">
           <div class="header">
               <h>Report Issue</h>
               </div>
               
           <label for="fname">Issue:</label>
           
           <select id="Request" >
                     <option label="Broken Asset">Broken asset</option>
                     <option label="Stolen Asset">Stolen Asset</option>
                     <option label="Virus/Malware">Virus/Malware</option>
                     <option label="hardware failure">Hardware Failure</option>
                     <option label="Laptop Overheating">Laptop Overheating</option>
                     <option label="Laptop not charging">Laptop not charging</option>
                     <option label="Other">Other</option>
               </select>
               
           <label for="lname">Description:</label>
           
           <input type="text" id="Description" classname="form-input"/>

           <div class="form-control">
			<label for="username">Line manager</label>
			<input type="email" placeholder="phyllis@mindworx.co.za" id="email" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			
		</div>
           
           <label for="lname">Upload evidence:</label>
           
           <form action="upload.php" method="post" enctype="multipart/form-data">
             <input type="file" name="fileToUpload" id="fileToUpload"/>
             {/* <input type="submit" value="Upload Image" name="submit">  */}
           <button type="submit"class="btnSubmit">submit</button>
           </form>
           
           
           
           
           
           
           </div>
                  
               
           
                 </div>
                   
                    )
                }
            }
           
           export default reportissue