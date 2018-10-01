import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { toggleModal, setModalData } from '../actions/products';

class ProductCard extends Component {
  render() {
    return (
      <View>
        {this.props.productLists.map(product => {
          return (
            <TouchableOpacity onPress={() => this.props.setData(product)} style={styles.productCard} key={product.name}>
              <View style={{ height: 175, width: 150, flex: 2 }}>
                <Image source={{ uri: product.imgSrc }} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}></Image>
              </View>
              <View style={{ height: 175, width: 150, flex: 1 }}>
                <Text style={{ paddingLeft: 10, paddingTop: 10 }}>{product.name}</Text>
                <Text style={{ paddingLeft: 10, paddingTop: 10 }}>{product.price}</Text>                
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  productCard: {
    height: 175, borderWidth: 0.5, borderColor: '#ccc', width: 175, marginRight: 20
  }
})

function mapStateToProps(state) {
  return {
    productLists: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleProductModal() {
      dispatch(toggleModal())
    },
    setData(payload) {
      dispatch(setModalData(payload))
      dispatch(toggleModal())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
