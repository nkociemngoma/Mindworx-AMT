import React, { Component } from 'react';
import ReactDOM from 'react-dom';





class requestpage extends Component {
    render (){
        return(     
           <div class= "container2">
           <div class="header">
               <h>Log Request</h>
               </div>
               
           <label for="fname">Request:</label>
           
           <select id="Request" >
                     <option label="Data Reload">Data Reload</option>
                     <option label="Program Installation Assistance">Program Installation Assistance</option>
                     <option label="Technical Assistance">Technical Assistance</option>
                     <option label="Follow-up">Follow-Up</option>
                     <option label="Other">Other</option>
               </select>


               
           <label for="lname">Description:</label>
           
           <input type="text" id="Description" classname="form-input"/>
           
           <label for="lname">Upload evidence:</label>
           
           <form action="upload.php" method="post" enctype="multipart/form-data">
             <input type="file" name="fileToUpload" id="fileToUpload"/>
             {/* <input type="submit" value="Upload Image" name="submit">  */}
           <button type="submit"class="btnSubmit">submit</button>
           </form>
           
           
           
           
           
           
           </div>
                  
               
           
                 
                   
                    )
                }
            }
           
           export default requestpage