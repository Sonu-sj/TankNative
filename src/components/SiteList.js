"use-strict";

import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from './AppText'
const SiteList = props => {
    console.log('props',props);	
    return (
    <View style={styles.siteList}>	
     <AppText><Icon size={35} style={styles.iconStyles} onPress = {()=>props.changeSite(-1)} name="ios-arrow-back"/> Site-{props.name} <Icon size={35} style={styles.iconStyles} onPress = {()=>props.changeSite(1)} name="ios-arrow-forward"/></AppText>
    </View>
    )
}


const styles = StyleSheet.create({
  iconStyles: {
    color: 'white',
    marginLeft:10,
    marginRight:10,
  },
  siteList: {
    alignItems:'center'
  },
});
export default SiteList; 