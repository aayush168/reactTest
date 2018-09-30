import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Toolbar from './Toolbar';
import ProductCard from './ProductCard';
import FeaturedProducts from './FeaturedProducts'

class Main extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Toolbar/>
        <ScrollView>
          <View style={{padding: 10}}>
            <FeaturedProducts/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Main