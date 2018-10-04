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
          <View style={{ alignItems: 'center', paddingHorizontal: 15}}>
            <Image source={{ uri: this.props.modalData.imgSrc }} style={{ width: 300, maxHeight: 200, flex: 1, marginBottom: 20 }}></Image>              
            <Text style={{fontSize: 20, marginBottom: 20}}>{this.props.modalData.name}</Text>
            <Text>Details: {this.props.modalData.details}</Text>
            <View style={{flexDirection: 'row', marginVertical: 20, alignItems: 'center'}}>
              <Text style={{ flex: 1, textAlign: 'left' }}>Price:</Text> 
              <Text style={{ flex: 1, textAlign: 'right', fontSize: 22 }}>${this.props.modalData.price}</Text>
            </View>
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
              color="#ff7d72"
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
