import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Toolbar from './Toolbar';
import FeaturedProducts from './FeaturedProducts'

class Main extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Toolbar/>
        {/* <ScrollView> */}
          <View style={{paddingHorizontal: 15}}>
            <FeaturedProducts/>
          </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default Main