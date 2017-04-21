"use-strict";

import React from 'react';
import {View,Text,StyleSheet } from 'react-native'; 
import {Card} from 'react-native-elements'
const Tankcard = props => {
	return (<Card>
		<Text>Product: 87 Gasohol</Text>
			<Text>Ullage: 12000</Text>
			</Card>
	)
} 

export default Tankcard;