import React,{Component} from 'react';
import {variables} from './Variables.js';
import StatusCard from '../components/status-card/StatusCard.jsx';

export class Forms extends Component{

    constructor(props){
        super(props);

        this.state={
            users:[],
            modalTitle:"",
            ID:0,
            Username:"",
            FirstName:"",
            LastName:"",
            EmailAddress:"",
            Cell_Number:"",
            ID_Number:"",
            Gender:"",
            UserRole:"",
            UserLocation:"",
            Programme:"",
         
           
        }
    }


    refreshList(){
        fetch("http://localhost:59231/api/UserTable")
        .then(response=>response.json())
        .then(data=>{
            this.setState({UserTable:data});
        });
    }
    
    componentDidMount(){
        this.refreshList();
    }
    
    changeUsername =(e)=>{
        this.setState({Username:e.target.value});
    }
    
    changeFirstName=(e)=>{
        this.setState({FirstName:e.target.value});
    }
    changeLastName=(e)=>{
        this.setState({LastName:e.target.value});
    }
    changeEmailAddress =(e)=>{
        this.setState({EmailAddress:e.target.value});
    }
    changeCell_Number =(e)=>{
        this.setState({Cell_Number:e.target.value});
    }
    changeID_Number =(e)=>{
        this.setState({ID_Number:e.target.value});
    }
    
    changeGender =(e)=>{
        this.setState({Gender:e.target.value});
    }
    changeUserRole =(e)=>{
        this.setState({UserRole:e.target.value});
    }
    
    changeUserLocation=(e)=>{
        this.setState({UserLocation:e.target.value});
    }
    changeProgramme =(e)=>{
        this.setState({Programme:e.target.value});
    }
    
    createClick(){
        fetch("http://localhost:59231/api/UserTable",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Username:this.state.Username,
                FirstName:this.state.FirstName,
                LastName:this.state.LastName,
                EmailAddress:this.state.EmailAddress,
                Cell_Number:this.state.Cell_Number,
                ID_Number:this.state.ID_Number,
                Gender:this.state.Gender,
                UserRole:this.state.UserRole,
                UserLocation:this.state.UserLocation,
                Programme:this.state.Programme,
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    render(){
        const {
            users,
            modalTitle,
            ID,
            Username,
            FirstName,
            LastName,
            EmailAddress,
            Cell_Number,
            ID_Number,
            Gender,
            UserRole,
            UserLocation,
            Programme,
        }=this.state;
    
        return(
    <div>

<h1>Add User</h1>
      
      <div className="row">
      <div class="form-horizontal" >

      <div className="modal-body">
    <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">User Name</span>
            <input type="text" className="form-control"
            value={Username}
            onChange={this.changeUsername}/>
        </div>


      
        <div className="input-group mb-3">
            <span className="input-group-text">First Name</span>
            <input type="text" className="form-control"
            value={FirstName}
            onChange={this.changeFirstName}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Last Name</span>
            <input type="text" className="form-control"
            value={LastName}
            onChange={this.changeLastName}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Email Address</span>
            <input type="text" className="form-control"
            value={EmailAddress}
            onChange={this.changeEmailAddress}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Cellpone Number</span>
            <input type="text" className="form-control"
            value={Cell_Number}
            onChange={this.changeCell_Number}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">ID Number</span>
            <input type="text" className="form-control"
            value={ID_Number}
            onChange={this.changeID_Number}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Gender</span>
            <input type="text" className="form-control"
            value={Gender}
            onChange={this.changeGender}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">User Role</span>
            <input type="text" className="form-control"
            value={UserRole}
            onChange={this.changeUserRole}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">User Location</span>
            <input type="text" className="form-control"
            value={UserLocation}
            onChange={this.changeUserLocation}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Programme</span>
            <input type="text" className="form-control"
            value={Programme}
            onChange={this.changeProgramme}/>
        </div>

        {ID==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        )
    }
}

export default Forms;