import React from 'react';
import {View,Text,StyleSheet } from 'react-native'; 
const TankBar = props => {
	let mapLevel = () => {
		if(props.height > 50){
			return {
				backgroundColor:'#65dbb1'
			}
		} else if(props.height > 25){			
			return {
				backgroundColor:'#fcb070'
			}
		} else {
			return {
				backgroundColor:'#d07363'
			}
		}
	}

	return(
		<View>
			<Text style={{'textAlign':'center','color':'white'}}>{props.product}</Text>
			<Text style={[styles.cylinder,mapLevel()]}></Text>
		</View>
	)
}

const styles = StyleSheet.create({
  cylinder: {
	margin: 0,
	width: 100,
	height: 300,
    borderRadius:50,
	margin:20,
  }
});

export default TankBar;