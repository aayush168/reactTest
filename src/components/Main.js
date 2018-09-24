import React, { Component } from 'react';
import { Container } from 'native-base';
import { ScrollView } from 'react-native'
import Toolbar from './Toolbar';
import ProductCard from './ProductCard'

class Main extends Component {
  render() {
    return (
      <Container>
        <Toolbar/>
        <ProductCard/>
      </Container>
    );
  }
}

export default Main