import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Button, TouchableOpacity, StyleSheet, Modal, TouchableHighlight } from 'react-native';
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
    fontSize: 24,
    marginVertical: 10,
    fontWeight: '700'
  }
})

function mapStateToProps(state) {
  console.log(state.modalVisibility)
  return {
    modalStatus: state.modalVisibility
  };
}

export default connect(mapStateToProps)(FeaturedProducts);
