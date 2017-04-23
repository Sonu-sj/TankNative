"use-strict";

import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from './AppText'
const SiteList = props => {
    console.log('props',props);	
    return (
    <View style={styles.siteList}>	
     <TouchableOpacity onPress = {()=>props.changeSite(-1)}><Icon size={35} style={styles.iconStyles} name="ios-arrow-back"/></TouchableOpacity><AppText>Site - {props.name}</AppText><TouchableOpacity onPress = {()=>props.changeSite(1)} ><Icon size={35} style={styles.iconStyles} name="ios-arrow-forward"/></TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
  iconStyles: {
    color: 'white',
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  siteList: {
    flexDirection:'row',
    justifyContent:'center'
  },
});
export default SiteList; 