import React from 'react'

import LearnerTable from '../components/table/LearnerTable'

import LearnerStatus from '../assets/LearnerJsonData/LearnerStatus.json'

import LearnerBadge from "../components/badge/LearnerBadge";

const orderStatus = {
    
    
    "Approved": "success",
    "rejected": "danger",
    "reported": "sucess",
  
  "Resolved": "sucess",
}

    const renderOrderHead = (item, index) => (
        <th key={index}>{item}</th>
    )

    
    

    
    const renderOrderBody = (item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
             <td>{item.user}</td>
            <td>{item.description}</td>
            <td>{item.date}</td>
            <td>
                <LearnerBadge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
    )

    const latestOrders = 
  [
        "request/reports id",
        "user",
        "description",
        "date",
        "status",
        

    ]

      

    const Status = () => {
        return (
            <div>
                <h2 className="page-header">
                    Status
                </h2>
                <div className="row">
                <div className="col-08">
                    <div className="card">
                        <div className="card__body">
                            <LearnerTable
                                headData={latestOrders}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={LearnerStatus}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                           />
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}
   
    export default Status
