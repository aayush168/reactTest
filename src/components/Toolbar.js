import React, { Component } from 'react';
import { View, Text } from 'react-native'

class Toolbar extends Component {
  render() {
    return (
      <View style={{ height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 20, fontWeight: '700'}}>
          Home
        </Text>
        </View>
    );
  }
}

export default Toolbar