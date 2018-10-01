import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import ProductCardModal from './ProductCardModal';

class FeaturedProducts extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titleLabel}>Featured Products</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ProductCard/>
        </ScrollView>
        <ProductCardModal/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleLabel: {
    fontSize: 18,
    marginVertical: 10
  }
})

export default FeaturedProducts;
