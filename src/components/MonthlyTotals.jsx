import React, { Component } from "react";
import PieChart from './PieChart'
import BarChart from './BarChart'
import dataFormatter from '../dataFormatter.js'

import data from "../monthlyData.js"





class MonthlyTotals extends Component {

  constructor(props){
    super(props)
    this.state={
      data:data,
      selectedMonth:''
    }
    
  }
render(){
var formattedGraphData=dataFormatter(this.state.data)
console.log(formattedGraphData)
{if(formattedGraphData.totalPay-formattedGraphData.totalSpent>0){
    return(<div><BarChart data ={formattedGraphData}/> 
    <div >
        Total Earned : <p style={{color:"green"}}>${formattedGraphData.totalPay}</p><br></br> 
        Total Spent : <p style={{color:"red"}}>${formattedGraphData.totalSpent}</p> <br></br> 
        You were Under budge by : <p style={{color:"green"}}>${formattedGraphData.totalPay-formattedGraphData.totalSpent}</p>
        </div>
        </div>)
    
}else{
    return(<div><BarChart data ={formattedGraphData}/> 
    <div >
        Total Earned : <p style={{color:"green"}}>${formattedGraphData.totalPay}</p><br></br> 
        Total Spent : <p style={{color:"red"}}>${formattedGraphData.totalSpent}</p> <br></br> 
        You were OVER budge by : <p style={{color:"red"}}>${formattedGraphData.totalPay-formattedGraphData.totalSpent}</p>
        </div>
        </div>)
}}

}

    

}

export default MonthlyTotals