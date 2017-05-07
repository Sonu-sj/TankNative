import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import { VictoryBar,VictoryChart,VictoryArea} from "victory-native";
import AppText from '../components/AppText.js';
import LabelText from '../components/LabelText.js';
import LabelContainer from '../components/LabelContainer.js';
import Icon from 'react-native-vector-icons/Ionicons';

import TankPieChart from '../components/TankPieChart.js';

class TankDetails extends Component {

  render() {
    const colors = [
  "#f0f0f0"
];
    return (
      <View style={{"flex":1,"alignItems":"center"}}>
      <View style={styles.titleContainerStyle}>
      <Icon size={35} style={styles.iconStyles} name="ios-arrow-back"/><AppText>T2-Diesel</AppText>
      </View>
      <TankPieChart/>
      <View style={{justifyContent:"space-between"}}>
      <LabelText>SITE NAME</LabelText>
      <AppText>ABERDEEN BP -(102110)</AppText>
      <View style={styles.labelContainerStyle}>
      <LabelContainer label="TTSL" content="39 HRS"/>
      <LabelContainer label="MAX FILL" content ="22,000 GAL"/>
      </View>
      <View style={styles.labelContainerStyle}>
      <LabelContainer label="INVENTORY" content="180156 GAL"/>
      <LabelContainer label="LAST INVENTORY" content="03/17/2017"/>
      </View>
      </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyles: {
    color: 'white',
    marginLeft:10,
    marginRight:30,
    marginTop:10
  },
  titleContainerStyle: {
    flexDirection:'row',
    justifyContent:'center'
  },
  labelContainerStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:20
  }
});

export default TankDetails;