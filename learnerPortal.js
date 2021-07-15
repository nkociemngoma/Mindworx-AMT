import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LearnerPortal extends Component {
    render (){
        return(
            <div>
            <div class="sidenav">
                <a href="#"class="active">Log Request</a>
                <a href="#">Report issue</a>
                <a href="#">Status</a>

                </div>

<div class= "main">
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