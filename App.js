import React from 'react';
import { Navigator, TouchableOpacity, Text,StyleSheet,Image} from 'react-native'; 
import Dashboard from './src/containers/Dashboard';
import TankDetails from './src/containers/TankDetails';
//import TankDetails from './containers/TankDetails';


const HOME_ROUTE = { title: 'Dashboard' }; 
const DETAILS_ROUTE = {title:'Details'};
import { Permissions, Notifications } from 'expo';

const PUSH_ENDPOINT = 'https://cbea177d.ngrok.io/api';
async function registerForPushNotificationsAsync() {
  // Android remote notification permissions are granted during the app
  // install, so this will only ask on iOS
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
        username: 'test',
       },
    }),
  });
}


export default class App extends React.Component {
    componentWillMount() {
    registerForPushNotificationsAsync();
    this.state = {
      route:HOME_ROUTE
    }
    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    alert('state');
    this.setState({route: DETAILS_ROUTE});
  };
  renderScene(route, navigator) { 
  if (route === HOME_ROUTE) { 
    return ( 
      <Dashboard gotoDetails = {()=>{
        console.log('routing');
        navigator.push(DETAILS_ROUTE)
      }}/>
    ); 
  } 
  return (<TankDetails goBack={()=>{
    navigator.pop();
  }}/>); 
} 
  render() {
    return (
    <Image source={require('./src/images/gradientbg.png')} style={styles.backgroundImage}>
    <Navigator style={styles.container}
        initialRoute={this.state.route} 
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
 