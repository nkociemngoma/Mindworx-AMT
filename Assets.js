import React from "react";

import Table from "../components/table/Table";

import assetsList from "../assets/JsonData/assets-list.json";

const assetsTableHead = [
  "",
  "serial number",
  "model",
  "description",
  "status",
  "assigned to",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.serialnumber}</td>
    <td>{item.model}</td>
    <td>{item.description}</td>
    <td>{item.status}</td>
    <td>{item.assignedto}</td>
  </tr>
);

const Assets = () => {
  return (
    <div>
      <h2 className="page-header">Assets</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={assetsTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={assetsList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
