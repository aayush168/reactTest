import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Loader extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default Loader