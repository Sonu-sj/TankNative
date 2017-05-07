"use strict";

import React, {Component} from 'react';
import {View} from 'react-native';
import {VictoryPie,VictoryLabel} from "victory-native";

class TankPieChart extends Component {
	render(){
		const data = [
		  {value: 400}
		];

		return (		
<VictoryPie  colorScale ={["#5d81c7","#53f5b9"]}
  data={[
    {title:"Inventory" , value: 200,text:18166,index:0},
    {title: "Ullage", value: 300,text:300,index:1}
  ]}
  y="value"
startAngle={120} endAngle={-120} innerRadius={160}
labelComponent={<VictoryLabel x={0} style={{fill:"white",fontSize:25}} dy={5} text={(datum)=> (datum.index===1)?"Inventory:180156 \n Ullage:3000":''}/>}
/>
		);
	}
}

export default TankPieChart;