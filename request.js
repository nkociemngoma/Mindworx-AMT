import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Request extends Component{

    constructor(props){
        super(props);

        this.state={
           
            
            request:[],
            modalTitle:"",
            TicketID:0,
            UserName:"",
            DateofRequest:"",
            Requests:"",
            Description:"",
            UploadEvidence:"",
            PhotoPath:variables.Evidence_URL
        }
    }

    refreshList(){

        fetch(variables.API_URL+'request')
        .then(response=>response.json())
        .then(data=>{
            this.setState({request:data,request:data});
        });

    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeUserName =(e)=>{
        this.setState({UserName:e.target.value});
    }
    changeDateofRequest =(e)=>{
        this.setState({DateofRequest:e.target.value});
    }
    changeRequests =(e)=>{
        this.setState({Requests:e.target.value});
    }
    changeDescription =(e)=>{
        this.setState({Description:e.target.value});
    }
    changeUploadEvidence =(e)=>{
        this.setState({UploadEvidence:e.target.value});
    }
    

    addClick(){
        this.setState({
            modalTitle:"Log Request",
            TicketID:0,
            DateofRequest:"",
            Requests:"",
            Description:"",
            UploadEvidence:"anonymous.png"
        });
    }
    editClick(req){
        this.setState({
            modalTitle:"Log Request",
            TicketID:req.TicketID,
            UserName:req.UserName,
            DateofRequest:req.DateofRequest,
            Requests:req.Requests,
            Description:req.Description,
            UploadEvidence:req.UploadEvidence
        });
    }

   

    createClick(){
        fetch(variables.API_URL+'request',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                UserName:this.state.UserName,
                DateofRequest:this.state.DateofRequest,
                Requests:this.state.Requests,
                Description:this.state.Description,
                UploadEvidence:this.state.UploadEvidence
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
        fetch(variables.API_URL+'request',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                UserName:this.state.UserName,
                DateofRequest:this.state.DateofRequest,
                Requests:this.state.Requests,
                Description:this.state.Description,
                UploadEvidence:this.state.UploadEvidence
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
        fetch(variables.API_URL+'request/'+id,{
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
        })
        }
    }

    imageUpload=(e)=>{
        e.preventDefault();

        const formData=new FormData();
        formData.append("file",e.target.files[0],e.target.files[0].name);

        fetch(variables.API_URL+'request/savefile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({UploadEvidence:data});
        })
    }

    render(){
        const {
            request,
            modalTitle,
            TicketID,
            UserName,
            DateofRequest,
            Requests,
            Description,
            UploadEvidence,
            PhotoPath
        }=this.state;

        return(
<div>

    <button type="button"
   class="btn btn-secondary btn-lg" 
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Log Request
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            TicketID
        </th>
        <th>
            UserName
        </th>
        <th>
            DateofRequest
        </th>
        <th>
            Requests
        </th>
        <th>
            Description
        </th>
        <th>
            UploadEvidence
        </th>
    </tr>
    </thead>
    <tbody>
        {request.map(req=>
            <tr key={req.TicketID}>
                <td>{req.UserName}</td>
                <td>{req.DateofRequest}</td>
                <td>{req.Requests}</td>
                <td>{req.Description}</td>
                <td>{req.UploadEvidence}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(req)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(req.TicketID)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">{modalTitle}</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">User Name</span>
            <input type="text" className="form-control"
            value={UserName}
            onChange={this.changeUserName}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Date of Request</span>
            <input type="date" className="form-control"
            value={DateofRequest}
            onChange={this.changeDateofRequest}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Requests</span>
            <select className="form-select"
            onChange={this.changeRequests}
            value={Requests}>
                <option label="Data Reload">Data Reload</option>
                     <option label="Program Installation Assistance">Program Installation Assistance</option>
                     <option label="Technical Assistance">Technical Assistance</option>
                     <option label="Follow-up">Follow-Up</option>
                     <option label="Other">Other</option>
            </select>
        </div>


        <div className="input-group mb-3">
            <span className="input-group-text">Description</span>
            <input type="text" className="form-control"
            value={Description}
            onChange={this.changeDescription}/>
        </div>


     </div>
     <div className="p-2 w-50 bd-highlight">
         <img width="250px" height="250px"
         src={PhotoPath+UploadEvidence}/>
         <input className="m-2" type="file" onChange={this.imageUpload}/>
     </div>
    </div>

    {TicketID==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {TicketID!==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}
   </div>

</div>
</div> 
</div>
</div>


        )
}
}


export default Request;
