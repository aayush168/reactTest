import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from "../components/Icon";
import { connect } from 'react-redux';
import { resetAll } from '../actions/products';


class Toolbar extends Component {
  cartSummary = () => {
    this.props.resetCart()
  }
  render() {
    return (
      <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, backgroundColor: '#fff' }}>
        <TouchableOpacity style={{flex: 1}}>
          <Icon
            name="menu"
            size={25}
          />
        </TouchableOpacity>
        <View style={{ flex: 2}}>
          <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            Home
          </Text>
        </View>
        <TouchableOpacity style={{ flex: 1, position: 'relative' }} onPress={() => this.cartSummary()}>
          <Icon
            name="cart"
            // color="#ff7d72"
            size={25}
            style= {{textAlign: 'right'}}
          />
          <Text style={{ position: 'absolute', right: 20, zIndex: 99, backgroundColor: 'red', color: 'white', width: 25, height: 25, borderRadius: 12.5, textAlign: 'center'}}>{this.props.cartItems.length}</Text>
        </TouchableOpacity>
        </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.billingModalData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetCart() {
      dispatch(resetAll())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
