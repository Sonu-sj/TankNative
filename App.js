import React from 'react';
import { Navigator, TouchableOpacity, Text,StyleSheet } from 'react-native'; 
import Dashboard from './src/containers/Dashboard';
//import TankDetails from './containers/TankDetails';

const HOME_ROUTE = { title: 'RNNYT' }; 
const INTRO_ROUTE = { title: 'Welcome' }; 

export default class App extends React.Component {
  renderScene(route, navigator) { 
  if (route === INTRO_ROUTE) { 
    return ( 
      <Dashboard></Dashboard>
    ); 
  } 
  return (<Dashboard></Dashboard>); 
} 
  render() {
    return (
    <Navigator style={styles.container}
        initialRoute={INTRO_ROUTE} 
        renderScene={this.renderScene} 
      /> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(72,186,194,1)',
    marginTop:20
  }
});
