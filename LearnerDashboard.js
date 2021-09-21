import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import LearnerStatus from "../assets/LearnerJsonData/LearnerStatus.json";

import LearnerStatusCard from "../components/status-card/LearnerStatusCard";

import LearnerTable from "../components/table/LearnerTable";

import LearnerBadge from "../components/badge/LearnerBadge";

import statusCards from "../assets/LearnerJsonData/LearnerStatusCard-Data.json";



const chartOptions = {
  series: [
    {
      name: "Active Assets",
      data: [40, 45, 52, 70, 66, 80, 73],
      color: "#f37521",
    },
    {
      name: "Inactive Assets",
      data: [60, 55, 48, 30, 34, 70, 77, 77, 77],
      color: "#56575b",
    },
  ],
  options: {
    // color: ['#f37521', '#56575b'],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};





const latestOrders= {
  header: [
      "Request/Report id",
      "user",
      "description",
      "date",
      "status",
      
      
  ],
  body: [
      {
          id: "#1715",
          user: "Cleo Phillips",
          date: "22 Jul 2021",
          price: "Data Top-Up",
          status: "in progress",
           
      },
     
      {
          id: "#1713",
          user: "Cleo Phillips",
          date: "21 Jul 2021",
          price: "Installation Assistance",
          status: "pending",
          

      },
      {
          id: "#1712",
          user: "Cleo Phillips",
          date: "21 Jun 2021",
          price: "broken asset",
          status: "No evidence provided",
          
      },
      {
          id: "#1711",
          user: "Cleo Phillips",
          date: "20 Jun 2021",
          price: "Data Top-Up",
          status: "rejected",
          
      }
  ]
}

const orderStatus = {

  
  "Approved": "success",
  "rejected": "danger",
  "reported": "sucess",
  
  "Resolved": "sucess"
}
const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <LearnerBadge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const LearnerDashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <LearnerStatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            {/* chart */}
            <Chart
              options={
                themeReducer === "theme-mode-dark"
                  ? {
                      ...chartOptions.options,
                      theme: { mode: "dark" },
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: "light" },
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
       
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>Status</h3>
            </div>
            <div className="card__body">
              <LearnerTable
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/status">View all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;
