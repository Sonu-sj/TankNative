import React from 'react';
import {View,Text,StyleSheet } from 'react-native'; 
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

getScale = (h)=>{
var defScale ="2.2";
return defScale + ',' + h/15;
}
const TankBar = props => {
	let TankStyle ={backgroundColor:'green'};
	let mapLevel = () => {
		if(props.height > 50){
			TankStyle = {
				backgroundColor:'#65dbb1',
				bottomColor:'#4cab8a',
				topColor:'#4cab8a',
				scale:getScale(props.height)
			}
		} else if(props.height > 25){			
			TankStyle = {
				backgroundColor:'#fcb070',
				bottomColor:'#d28d53',
				topColor:'#d28d53',
				scale:getScale(props.height)
			}
		} else {
			TankStyle = {
				backgroundColor:'#d07363',
				bottomColor:'#ed6149',
				topColor:'#ed6149',
				scale:getScale(props.height)
			}
		}
	}
mapLevel();
	return(
		<View>
			<Text style={{'textAlign':'center','color':'white'}}>{props.product}</Text>
<Svg height="300" width="200">
<G y="300">
<G scale="1,-1">
<G scale={TankStyle.scale} x="40">
	<Path fill={TankStyle.backgroundColor} d="M29,8C13.536,8,1,6.209,1,4v50c0,2.209,12.536,4,28,4s28-1.791,28-4V4C57,6.209,44.464,8,29,8z"/>
	<Ellipse fill={TankStyle.topColor} cx="29" cy="4" rx="28" ry="4"/>
	<Ellipse fill={TankStyle.bottomColor} cx="29" cy="54" rx="28" ry="4"/>
</G>
</G>
</G>
</Svg>

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