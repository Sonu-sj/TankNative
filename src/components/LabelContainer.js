import React from 'react';
import {View} from 'react-native';
import LabelText from '../components/LabelText.js';
import AppText from '../components/AppText.js';

const LabelContainer = props => {
	return (
		<View>
		<LabelText>{props.label}</LabelText>
		<AppText>{props.content}</AppText>
		</View>
	)
} 

export default LabelContainer;