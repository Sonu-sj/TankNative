"use-strict";

import React from 'react';
import TankBar from './TankBar';
import SiteList from './SiteList';
import {View,Text,StyleSheet,ScrollView} from 'react-native'; 
const TankScroll = props => {
	return(     <View>
				<SiteList style={{flexDirection:"row"}}name = {props.Site.siteName} changeSite={props.changeSite}/>
				<ScrollView horizontal style={{width:800}}>
					{props.Site.productList.map((product,i)=><TankBar key={i} height={product.height} product={product.name}/>)}
				</ScrollView>
				</View>
		
	);
}

export default TankScroll;