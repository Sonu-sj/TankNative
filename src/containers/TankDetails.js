import React, { Component } from 'react';

import {View} from 'react-native';
import { VictoryBar,VictoryChart,VictoryArea} from "victory-native";

import TankPieChart from '../components/TankPieChart.js';

class TankDetails extends Component {

  render() {
    const colors = [
  "#f0f0f0"
];
    return (
      <View>
      <TankPieChart/>
      <VictoryChart colorScale={colors} animate={{ duration: 500,easing: "bounce"}}>
      <VictoryBar style={{
  data: {fill:"green"}
}} />
      </VictoryChart>
      <VictoryChart animate={{ duration: 500,easing: "bounce"}}>
      <VictoryArea style={
        {"data": { fill: "#e95f46"}}
      } data={[
    {month: "September", profit: 35000, loss: 2000},
    {month: "October", profit: 42000, loss: 8000},
    {month: "November", profit: 55000, loss: 5000}
  ]}
  x="month"
  y={(datum) => datum.profit - datum.loss}
/>
</VictoryChart>
</View>
    );
  }
}

export default TankDetails;