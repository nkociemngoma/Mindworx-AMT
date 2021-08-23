import React from 'react'

import { Link } from 'react-router-dom'

import Charts from 'react-apexcharts'

import ApexCharts from 'apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
        series: [{
            name: 'Active Assets',
            data: [40, 45, 52, 70, 66, 80, 73],
            color: '#f37521'
        }, {
            name: 'Inactive Assets',
            data: [60, 55, 48, 30, 34, 70, 77, 77, 77],
            color: '#56575b'
        }],
        options: {
            // color: ['#f37521', '#56575b'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: true
        }
    }
}

var Options = {
    series: [{
        name: 'Pending requests',
        data: [4, 5, 5, 0, 6],
        color: '#f37521'
    }, {
     name:'Approved',
        data: [60, 55, 48, 30, 34,],
        color: '#56575b'
    }, {
        name:'Declined',
           data: [6, 5, 8, 30, 4, 70] ,
           color: 'black'   
    }],
    options: {

        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Data Top-Up', 'Admin Rights', 'Installation Assistance', 'Maintenance queries','Asset Replacement']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: true
        }
      }
    }
    
    var options = {
        series: [{
        data: [4, 9, 5, 15, 8,],
        color: '#56575b',
        xaxis: {
            categories: ['Stolen assets', 'Broken/damaged assets','Hardware failure','Virus/Malware','Overheating'],
        }
      }],
        chart: {
        type: 'bar',
        height: 250
      },
      Options: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: true
      },
    
      }
      
      
        
const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Linegraph showing active and inactive assets for the year 2021</h2>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Charts
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='150%'
                        />
                    </div>
                </div>

<div>
    <div>
                <h3 className="page-header">Bar Chart showing resolved issues reported in July 2021</h3>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Charts
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...options.Options,
                                theme: { mode: 'dark'}
                            } : {
                                ...options.Options,
                                theme: { mode: 'light'}
                            }}
                            series={options.series}
                            type='bar'
                            height='250%'
                        />
                        </div>
                    </div>
                </div>
                </div>

<div>
                <h4 className="page-header">Histogram showing the progress for requests logged in July 2021</h4>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Charts
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...Options.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...Options.options,
                                theme: { mode: 'light'}
                            }}
                            series={Options.series}
                            type='histogram'
                            height='300'
                            width= '900'
                            
                        />
                        </div>
                    </div>
                </div>
                </div>
               
                )
                }
            
export default Dashboard