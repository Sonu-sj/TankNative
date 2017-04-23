"use-strict";

import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'; 
import {Card} from 'react-native-elements'
const Tankcard = props => {
	return (
		<TouchableOpacity onPress = {()=>props.gotoDetails()}>
		<Card>
		<Text>Product: 87 Gasohol</Text>
			<Text>Ullage: 12000</Text>
			</Card>
			</TouchableOpacity>
	)
} 

export default Tankcard;