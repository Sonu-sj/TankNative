"use-strict";

import React from 'react';
import Tankcard from './TankCard';
import {View,Text,StyleSheet } from 'react-native'; 
const TankList = props => {
	return (
		<View>
			 {[...Array(7)].map((x, i) =>
    			<View key={i}>
				<View to="/tank"> 
					<Tankcard key={i}/>
				</View>
			</View>
  )}
		</View>
	)
}

export default TankList;