import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { connect } from 'react-redux';
import { toggleModal } from '../actions/products';

class ProductCardModal extends Component {
  render() {
    return (
       <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalToggleStatus}
        onRequestClose={() => { this.props.hideModal() }}>
        <View style={{ marginTop: 22, flex: 1 }}>
          <View style={{alignItems: 'center'}}>
            <Text>asdasd</Text>
            <Image source={{ uri: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg' }} style={{ width: 150, height: 150 }}></Image>              
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  
})


function mapStateToProps(state) {
  console.log(state.modalVisibility)
  return {
    modalToggleStatus: state.modalVisibility
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideModal() {
      dispatch(toggleModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardModal);
