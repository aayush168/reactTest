import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/products';

class Toolbar extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => { this.props.toggleProductModal }} style={styles.productCard}>
        <View style={{ height: 150, width: 150, flex: 2 }}>
          <Image source={{ uri: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg' }} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}></Image>
        </View>
        <View style={{ height: 150, width: 150, flex: 1 }}>
          <Text style={{ paddingLeft: 10, paddingTop: 10 }}>Double Decker Ham Burger</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  productCard: {
    height: 150, borderWidth: 0.5, borderColor: '#ccc', width: 150, marginRight: 20
  }
})

function mapDispatchToProps(dispatch) {
  return {
    toggleProductModal() {
      dispatch(toggleModal())
    }
  }
}
export default connect(mapDispatchToProps)(Toolbar);
