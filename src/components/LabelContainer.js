import React from 'react';
import {View} from 'react-native';
import LabelText from '../components/LabelText.js';
import AppText from '../components/AppText.js';

const LabelContainer = props => {
	return (
		<View style={{paddingLeft:10}}>
		<LabelText>{props.label}</LabelText>
		<AppText style={{fontSize:30,color:"white"}}>{props.content}</AppText>
		</View>
	)
} 

export default LabelContainer;