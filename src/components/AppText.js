import React, {Component} from 'react';
import { Text } from 'react-native';
class AppText extends Component {
  render() {
  	return(
      <Text style={this.props.style|| {fontSize: 40,color:"white"}}>
        {this.props.children}
      </Text>
      )
  }
}

export default AppText;