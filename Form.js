import React,{Component} from 'react';
import {variables} from './Variables.js';
import StatusCard from '../components/status-card/StatusCard.jsx';

export class Form extends Component{

  constructor(props){
      super(props);

      this.state={
          assets:[],
          Serial_Number:"",
          Description:"",
          Status:"",
          Model:"",
          Assigned_To:"",
          AssetID:0,
      }
    }

      refreshList(){
        fetch(variables.API_URL+'assets')
        .then(response=>response.json())
        .then(data=>{
            this.setState({assets:data});
        });
    }
    
    componentDidMount(){
        this.refreshList();
    }
    
    changeSerial_Number =(e)=>{
        this.setState({Serial_Number:e.target.value});
    }
    changeDescription =(e)=>{
        this.setState({Description:e.target.value});
    }
    changeStatus=(e)=>{
        this.setState({Status:e.target.value});
    }
    changeModel =(e)=>{
        this.setState({Model:e.target.value});
    }
    changeAssigned_To =(e)=>{
        this.setState({Assigned_To:e.target.value});
    }
    
   
  
    createClick(){
      fetch(variables.API_URL+'assets',{
          method:'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
              Serial_Number:this.state.Serial_Number,
              Description:this.state.Description,
              Status:this.state.Status,
              Model:this.state.Model,
              Assigned_To:this.state.Assigned_To,
              
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
      
        AssetID,
        Serial_Number,
        Description,
        Status,
        Model,
        Assigned_To
    }=this.state;

    return(
    
     <div>
    
      <h1>Add Assets</h1>
      
      <div className="row">
      <div class="form-horizontal" >
      
          <span class="form-control">Serial Number</span>
          <input type="text"  className="col-6"
          value={Serial_Number}
          onChange={this.changeSerial_Number}/>
          
         </div>
      
         <div class="form-horizontal" action="/action_page.php">
          <span class="form-control">Description</span>
          <input type="text"  className="col-6"
          value={Description}
          onChange={this.changeDescription}/>
         </div>
      
         <div class="form-horizontal" action="/action_page.php">
          <span class="form-control">Status</span>
          <input type="text"  className="col-6"
          value={Status}
          onChange={this.changeStatus}/>
         </div>
      
         <div class="form-horizontal" action="/action_page.php">
          <span class="form-control">Model</span>
          <input type="text"  className="col-6"
          value={Model}
          onChange={this.changeModel}/>
         </div>

         <div class="form-horizontal" action="/action_page.php">
          <span class="form-control">Assigned To</span>
          <input type="text"  className="col-6"
          value={Assigned_To}
          onChange={this.changeAssigned_To}/>
          
         </div>
      
      
          {AssetID===0?
          <button type="button"
          onClick={()=>this.createClick()}
          >Create</button>
          :null}
      
      </div>
     </div>
          
    )
          }
        }

        export default Form;