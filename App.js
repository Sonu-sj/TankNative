import React from 'react';
import { Navigator, TouchableOpacity, Text,StyleSheet,Image} from 'react-native'; 
import Dashboard from './src/containers/Dashboard';
import TankDetails from './src/containers/TankDetails';
//import TankDetails from './containers/TankDetails';


const HOME_ROUTE = { title: 'Dashboard' }; 
const DETAILS_ROUTE = {title:'Details'};
import { Permissions, Notifications } from 'expo';

const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

async function registerForPushNotificationsAsync() {
  // Android remote notification permissions are granted during the app
  // install, so this will only ask on iOS
  alert('running')
  let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExponentPushTokenAsync();

  // POST the token to our backend so we can use it to send pushes from there
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
       },
       user: {
        username: 'Brent',
       },
    }),
  });
}

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
 