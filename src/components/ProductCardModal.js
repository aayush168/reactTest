import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Modal, Slider, TextInput } from 'react-native'
import { connect } from 'react-redux';
import { toggleModal, addToCart } from '../actions/products';

class ProductCardModal extends Component {
  constructor() {
    super()
    this.state = {
      quantity: '1'
    }
  }
  render() {
    return (
       <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalStatus}
          onRequestClose={() => this.props.hideModal()}>
        <View style={{ justifyContent: 'center', alignItems: 'center' , flex: 1 }}>
          <View style={{ alignItems: 'center', paddingHorizontal: 15}}>
            <Image source={{ uri: this.props.modalData.imgSrc }} style={{ width: 300, maxHeight: 200, flex: 1, marginBottom: 20 }}></Image>              
            <Text style={{fontSize: 22, marginBottom: 20, fontWeight: 'bold'}}>{this.props.modalData.name}</Text>
            <Text>Details: {this.props.modalData.details}, Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
              <TouchableOpacity style={{ height: 25, width: 25, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#bbb' }}>
                <Text>-</Text>
              </TouchableOpacity>
              <View style={{ width: 100 }}>
                <TextInput
                  style={{ textAlign: 'center'}}
                  onChangeText={(quantity) => this.setState({ quantity })}
                  value={this.state.quantity}
                  keyboardType= 'numeric'
                />
              </View>
              <TouchableOpacity style={{ height: 25, width: 25, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#bbb' }}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20,  alignItems: 'center'}}>
              <Text style={{ flex: 1, textAlign: 'left', fontSize: 20, fontWeight: 'bold' }}>Price</Text> 
              <Text style={{ flex: 1, textAlign: 'right', fontSize: 20, fontWeight: 'bold' }}>${this.props.modalData.price}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 2 }}>
                <Button
                  onPress={() => this.props.add(this.props.modalData)}
                  title="Add To Cart"
                  color="#ff7d72"
                  accessibilityLabel="Add To Cart"
                />
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Button
                  onPress={() => this.props.add(this.props.modalData)}
                  title="Order Now"
                  color="#222"
                  accessibilityLabel="Order Now"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
})

function mapStateToProps(state) {
  return {
    modalStatus: state.productModalVisibility,
    modalData: state.productModalData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideModal() {
      dispatch(toggleModal())
    },
    add(payload) {
      dispatch(addToCart(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardModal);
