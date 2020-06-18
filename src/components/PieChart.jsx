import React, { Component } from "react";
import { Radar} from "react-chartjs-2";
import dataFormatter from "../dataFormatter.js"







  var PieChart =(props)=>{


    var chartData={

        labels:dataFormatter(props.data).categories,
        datasets:[{
            label:'Money Spent',
            data:dataFormatter(props.data).totals,
            backgroundColor:'rgba(290,55,133,0.6)'
        }]
    }

    return (
        <div className='chart'>
          <Radar
            data={chartData}
            width={700}
            height={350}
            options={{ 
                maintainAspectRatio: false,
                responsive:true
              }}
          />
  
        </div>
      );

    
  }
    
  
    
  






/////////////////////////////////////////////////////////

  


  export default PieChart;