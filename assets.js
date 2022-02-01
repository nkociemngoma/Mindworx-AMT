import React,{Component} from 'react';
import {variables} from './Variables.js';
import { Link } from 'react-router-dom'



export class Assets extends Component{

    constructor(props){
        super(props);

        this.state={
            assets:[],
            modalTitle:"",
            Serial_Number:"",
            Description:"",
            Status:"",
            Model:"",
            Assigned_To:"",
            AssetID:0,
            

            

            Serial_NumberFilter:"",
            StatusFilter:"",
            assetsWithoutFilter:[]
        }
    }

FilterFn(){
    var Serial_NumberFilter=this.state.Serial_NumberFilter;
    var StatusFilter = this.state.StatusFilter;

    var filteredData=this.state.assetsWithoutFilter.filter(
        function(el){
            return el.Serial_Number.toString().toLowerCase().includes(
                Serial_NumberFilter.toString().trim().toLowerCase()
            )&&
            el.Status.toString().toLowerCase().includes(
                StatusFilter.toString().trim().toLowerCase()
            )
        }
    );

    this.setState({assets:filteredData});

}

sortResult(prop,asc){
    var sortedData=this.state.assetsWithoutFilter.sort(function(a,b){
        if(asc){
            return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
        }
        else{
            return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
        }
    });

    this.setState({assets:sortedData});
}

changeSerial_NumberFilter = (e)=>{
    this.state.Serial_NumberFilter=e.target.value;
    this.FilterFn();
}
changeStatusFilter = (e)=>{
    this.state.StatusFilter=e.target.value;
    this.FilterFn();
}

refreshList(){
    fetch(variables.API_URL+'assets')
    .then(response=>response.json())
    .then(data=>{
        this.setState({assets:data,assetsWithoutFilter:data});
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

addClick(){
    this.setState({
        modalTitle:"Add Asset",
        AssetID:0,
        Serial_Number:"",
        Description:"",
        Status:"",
        Model:"",
        Assigned_To:"",
    });
}

editClick(assets){
    this.setState({
        modalTitle:"Edit Asset",
        AssetID:assets.AssetID,
        Serial_Number:assets.Serial_Number,
        Description:assets.Description,
        Status:assets.Status,
        Model:assets.Model,
        Assigned_To:assets.Assigned_To
    });
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


updateClick(){
    fetch(variables.API_URL+'assets',{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            AssetID:this.state.AssetID,
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

deleteClick(id){
    if(window.confirm('Are you sure?')){
    fetch(variables.API_URL+'assets/'+id,{
        method:'DELETE',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        this.refreshList();
    },(error)=>{
        alert('Failed');
    })   }
}


render(){
    const {
        assets,
    modalTitle,
        AssetID,
       
    }=this.state;

    return(
<div class="modal-footer">
<button type="button"
class="btn btn-secondary btn-lg" 
data-bs-toggle="modal"
data-bs-target="#exampleModal"
onClick={()=>this.addClick()}>
     <Link to='/Form'>Add Assets</Link>
</button>

<table className="table table-striped">
<thead>
<tr>
    <th>
    <div className="d-flex flex-row">

        
<input className="form-control m-2"
onChange={this.changeSerial_NumberFilter}
placeholder="Serial Number"/>

<button type="button" className="btn btn-light"
onClick={()=>this.sortResult('Serial_Number',true)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill= "orange" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg>
</button>

<button type="button" className="btn btn-light"
onClick={()=>this.sortResult('Serial_Number',false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange"className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
<path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
</svg>
</button>

</div>

<div className="d-flex flex-row">
<input className="form-control m-2"
onChange={this.changeStatusFilter}
placeholder="Status"/>

<button type="button" className="btn btn-light"
onClick={()=>this.sortResult('Status',true)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange"className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg>
</button>

<button type="button" className="btn btn-light"
onClick={()=>this.sortResult('Status',false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
<path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
</svg>
</button>
</div>

AssetID
</th>
<th>
    
        Serial Number
    </th>
    <th>
        Description
    </th>
    <th>
        Status
    </th>
    <th>
        Model
        </th>
    <th>
        Assigned To
    </th>
</tr>
</thead>   
<tbody>
    {assets.map(assets=>
        <tr key={assets.AssetID}>
            <td>{assets.Serial_Number}</td>
            <td>{assets.Description}</td>
            <td>{assets.Status}</td>
            <td>{assets.Model}</td>
            <td>{assets.Assigned_To}</td>
            <td>
            <button type="button"
            className="btn btn-light mr-1" 
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={()=>this.editClick(assets)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-pencil-square" viewBox="0 0 16 16"colour="orange">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>

            <button type="button"
            className="btn btn-light mr-1"
            onClick={()=>this.deleteClick(assets.AssetsID)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-trash-fill" viewBox="0 0 16 16" colour="orange">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            </td>
        </tr>
        )}
</tbody>
</table>

 <div className="modal fade" id="exampleModal" tabIndex="-5" aria-hidden="true"  >
<div className="modal-dialog modal-lg">
<div class="btn btn-secondary">
<div className="modal-content">
<div className="modal-header">
   <h5 className="modal-title">{modalTitle}</h5>
   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
   ></button>
</div>




{/* <div className="modal-body lg">
   <div className="input-group col-12">
    <span className="input-group-text">Serial_Number</span>
    <input type="text" className="form-control"
    value={Serial_Number}
    onChange={this.changeSerial_Number}/>
   </div>

   <div className="modal-body lg">
   <div className="input-group col-12">
    <span className="input-group-text">Description</span>
    <input type="text" className="form-control"
    value={Description}
    onChange={this.changeDescription}/>
   </div>

   <div className="modal-body lg">
   <div className="input-group col-12">
    <span className="input-group-text">Status</span>
    <input type="text" className="form-control"
    value={Status}
    onChange={this.changeStatus}/>
   </div>

   <div className="modal-body lg">
   <div className="input-group col-12">
    <span className="input-group-text">Model</span>
    <input type="text" className="form-control"
    value={Model}
    onChange={this.changeModel}/>
   </div>

   <div className="modal-body lg">
   <div className="input-group col-12">
    <span className="input-group-text">Assigned_To</span>
    <input type="text" className="form-control"
    value={Assigned_To}
    onChange={this.changeAssigned_To}/>
   </div>


    {AssetID===0?
    <button type="button"
    className="btn btn-secondary float-start" 
    onClick={()=>this.createClick()}
    >Create</button>
    :null} */}


    {AssetID!==0?
    <button type="button"
    className="modal-footer"
    className="btn btn-secondary "
    onClick={()=>this.updateClick()}
    >Update</button>
    :null}
    </div> 
     </div>
     </div>
     </div>
     </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>

    

 


 )}
}



    

export default Assets;
