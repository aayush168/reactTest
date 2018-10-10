import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { toggleModal, setModalData } from '../actions/products';

class ProductCard extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.productLists.map(product => {
          return (
            <TouchableOpacity onPress={() => this.props.setData(product)} key={product.name} style={styles.productCard}>
              <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, flexDirection: 'row', flex: 1}}>
                <View style={{ flex: 1 }}>
                  <Image source={{ uri: product.imgSrc }} style={{ flex: 1 }}></Image>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.productTitle}>{product.name}</Text>
                  <Text style={styles.priceLabel}>Rs.{product.price}</Text> 
                </View>            
                    
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
    marginBottom: 10,
    height: 100
  },
  productTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5
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
