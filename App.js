import React from 'react';
import { Navigator, TouchableOpacity, Text,StyleSheet,Image} from 'react-native'; 
import Dashboard from './src/containers/Dashboard';
import TankDetails from './src/containers/TankDetails';
//import TankDetails from './containers/TankDetails';


const HOME_ROUTE = { title: 'Dashboard' }; 
const DETAILS_ROUTE = {title:'Details'};


export default class App extends React.Component {
  renderScene(route, navigator) { 
  if (route === HOME_ROUTE) { 
    return ( 
      <Dashboard gotoDetails = {()=>{
        console.log('routing');
        navigator.push(DETAILS_ROUTE)
      }}/>
    ); 
  } 
  return (<TankDetails/>); 
} 
  render() {
    return (
    <Image source={require('./src/images/gradientbg.png')} style={styles.backgroundImage}>
    <Navigator style={styles.container}
        initialRoute={HOME_ROUTE} 
        renderScene={this.renderScene} 
      /> 
     </Image> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
 