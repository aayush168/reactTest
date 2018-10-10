import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Modal, Slider, TextInput } from 'react-native'
import { connect } from 'react-redux';
import { toggleModal, addToCart } from '../actions/products';

class ProductCardModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
  }
  toggleQuantity = (status) =>  {
    let quantity = this.state.quantity
    if (status === 'add' && this.state.quantity >= 1) {
      quantity++ 
      this.setState({quantity: quantity})
    } else if (status === 'sub' && this.state.quantity > 1) { 
      quantity--
      this.setState({ quantity: quantity })        
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
            <Image source={{ uri: this.props.modalData.imgSrc }} style={styles.productImage}></Image>              
            <Text style={{fontSize: 22, marginBottom: 20, fontWeight: 'bold'}}>{this.props.modalData.name}</Text>
            <Text>Details: {this.props.modalData.details}, Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
              <TouchableOpacity style={styles.toggleBtn} onPress={() => this.toggleQuantity('sub')}>
                <Text>-</Text>
              </TouchableOpacity>
              <View style={{ width: 100 }}>
                <Text style={styles.center}>{this.state.quantity}</Text>
              </View>
              <TouchableOpacity style={styles.toggleBtn} onPress={() => this.toggleQuantity('add')}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20}}>
              <Text style={[styles.left, styles.priceLabel]}>Price</Text> 
              <Text style={[styles.right, styles.priceLabel]}>${this.props.modalData.price}</Text>
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
  toggleBtn: {
    height: 25, width: 25, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#bbb'
  }, 
  productImage: {
    width: 300, maxHeight: 200, flex: 1, marginBottom: 20
  },
  priceLabel: {
    flex: 1, fontSize: 20, fontWeight: 'bold' 
  },
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  },
  center: {
    textAlign: 'center'
  }
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
