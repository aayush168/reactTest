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
              <View style={{ height: 150, width: 150, flex: 2 }}>
                <Image source={{ uri: product.imgSrc }} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}></Image>
              </View>
              <View style={{ height: 150, width: 150, flex: 1 }}>
                <Text style={styles.productTitle}>{product.name}</Text>
                <Text style={styles.priceLabel}>{product.price}</Text>                
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
    height: 150, borderWidth: 0.5, borderColor: '#ccc', width: 150, marginVertical: 5, marginRight: 10
  },
  productTitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 5
  },
  priceLabel: {
    fontSize: 14,
    textAlign: 'center'
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
