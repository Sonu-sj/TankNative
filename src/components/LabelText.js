import React, {Component} from 'react';
import { Text } from 'react-native';
class LabelText extends Component {
  render() {
  	return(
      <Text style={{fontSize: 20,color:"#9aabe9"}}>
        {this.props.children}
      </Text>
      )
  }
}

export default LabelText;