import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from "../components/Icon";

class Toolbar extends Component {
  cartSummary() {
    alert('asd')
  }
  render() {
    return (
      <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
        <TouchableOpacity style={{flex: 1}}>
          <Icon
            name="menu"
            color="#ff7d72"
            size={25}
          />
        </TouchableOpacity>
        <View style={{ flex: 2}}>
          <Text style={{ fontSize: 20, textAlign: 'center'}}>
            Home
          </Text>
        </View>
        <TouchableOpacity style={{ flex: 1 }} onPress={this.cartSummary}>
          <Icon
            name="cart"
            color="#ff7d72"
            size={25}
            style= {{textAlign: 'right'}}
          />
        </TouchableOpacity>
        </View>
    );
  }
}

export default Toolbar