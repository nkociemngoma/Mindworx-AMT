import logo from './logo.svg';
import './App.css';
import {Bar, Pie, Doughnut, Line} from 'react-chartjs-2'


function App() {
  return (
    <div className="App">
      <h1>Assets management tool</h1>
      <h1>Our learners</h1>
      <Bar
      data={{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
          label:'ABSA',
          data:[10,20,30,40,50,60],
          backgroundColor:'orange',
          barThickness:12
        },
        {
          label:'OZOW',
          data:[32,21,34,33,22,56],
          backgroundColor:'black',
          barThickness:12
        },
        {
          label:'MODULAR',
          data:[12,20,23,40,23,23],
          backgroundColor:'blue',
          barThickness:12
        },
        {
          label:'BBD',
          data:[10,50,30,34,43,34],
          backgroundColor:'grey',
          barThickness:12
        },
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Number of leaners:"+toolTipItem.value)
            }
          }

        },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'cyan'
            },
              scaleLabel:{
                labelString:'Months',
                display:true,
                fontColor:'orange',
                fontSize:20
              },
              ticks:{
                fontColor:'grey'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'cyan'
            },
            scaleLabel:{
                labelString:'No. of learners',
                display:true,
                fontColor:'orange',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'grey',
              
            }
          }
          ]
        }
      }}
      >

      </Bar>
      <h1>Chart showing number of assests issued</h1>
      <Pie
      data={{
        labels:['Laptops','Laptop charger','Router','Simcards'],
        datasets:[{
          data:[10,20,30,40],
          backgroundColor:['grey','blue','orange','black'],
        },
        {
          data:[20,44,30,33],
          backgroundColor:['grey','blue','orange','black'],
        },
        {
          data:[22,20,44,40],
          backgroundColor:['grey','blue','orange','black'],
        }]
      }
      }
      >

      </Pie>
      <h1>Chart showing requests</h1>
      <Doughnut
      data={{
        labels:['Approved','Pending','Dclined','Ignored','Escalated','Not registered'],
        datasets:[{
          data:[100,20,30,40,55,60],
          backgroundColor:['orange','blue','grey','black','cyan','white'],
        },
        {
          data:[20,44,35,33,50,60],
          backgroundColor:['orange','blue','grey','black','cyan','white'],
        },
        {
          data:[22,20,444,40,70,30],
          backgroundColor:['orange','blue','grey','black','cyan','white'],
        }]
      }
      }
      >

      </Doughnut>
      <h1>Active and inactive assets</h1>
      <Line
      data={{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
        datasets:[{
          label:'Active',
          data:[10,20,30,40,50,60,50.20,70,80,50,35],
          backgroundColor:'orange',
          barThickness:12
        },
        {
          label:'Inactive',
          data:[32,21,34,33,22,56,40,22,34,35,60],
          backgroundColor:'grey',
          barThickness:12
        },
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Number of Assests:"+toolTipItem.value)
            }
          }

        },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'cyan'
            },
              scaleLabel:{
                labelString:'Months',
                display:true,
                fontColor:'orange',
                fontSize:20
              },
              ticks:{
                fontColor:'grey'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'cyan'
            },
            scaleLabel:{
                labelString:'No. of Assets',
                display:true,
                fontColor:'orange',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'grey',
              
            }
          }
          ]
        }
      }}
      >

      </Line>

    </div>
  );
}

export default App;
