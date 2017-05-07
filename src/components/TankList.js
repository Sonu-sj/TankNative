"use-strict";

import React from 'react';
import Tankcard from './TankCard';
import {View,ScrollView,Text,StyleSheet } from 'react-native'; 
import { VictoryBar} from "victory-native";
const TankList = props => {
	console.log('tlist',props)
	return (
		<ScrollView style={{height:500}}>
			 {[...Array(7)].map((x, i) =>
					<Tankcard key={i} {...props}/>
  )}
		</ScrollView>
	)
}


export default TankList;