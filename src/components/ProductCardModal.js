import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Modal, Slider } from 'react-native'
import { connect } from 'react-redux';
import { toggleModal, addToCart } from '../actions/products';

class ProductCardModal extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }
  }
  componentDidUpdate(snapshot) {
    if(snapshot.modalStatus === false) {
      this.state.quantity = 1
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
          <View style={{alignItems: 'center'}}>
            <Image source={{ uri: this.props.modalData.imgSrc }} style={{ width: 150, height: 150 }}></Image>              
            <Text>{this.props.modalData.name}</Text>
            <Text>{this.props.modalData.price}</Text>
            <Text>{this.props.modalData.details}</Text>
            <Slider
              style={{width: 250, marginBottom: 10}}
              maximumValue={20}
              minimumValue={1}
              value={this.state.quantity}
              onValueChange = {val => this.setState({quantity: Math.round(val)})}
            />
            <Text style={{ marginBottom: 10 }}>{this.state.quantity}</Text>
            <Button
              onPress={() => this.props.add(this.props.modalData)}
              title="Add To Cart"
              color="#841584"
              accessibilityLabel="Add To Cart"
            />
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
