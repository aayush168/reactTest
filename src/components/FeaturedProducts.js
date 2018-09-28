import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Button, TouchableOpacity, StyleSheet, Modal, TouchableHighlight } from 'react-native'

class Toolbar extends Component {
  state = {
    modalVisible: false,
  }
  openModal(visible) {
    this.setState({ modalVisible: visible });
  }
  closeModal(visible) {
    this.setState({ modalVisible: visible });    
  }
  render() {
    return (
      <View>
        <Text style={styles.titleLabel}>Featured Products</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => {this.openModal(!this.state.modalVisible)}}>
            <View style={styles.productCard}>
              <View style={{ height: 150, width: 150, flex: 2}}>
                <Image source={{ uri: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg'}} style={{flex: 1, width: null, height:null, resizeMode: 'cover'}}></Image>
              </View>
              <View style={{ height: 150, width: 150, flex: 1 }}>
                <Text style={{paddingLeft: 10, paddingTop: 10}}>Double Decker Ham Burger</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.closeModal(!this.state.modalVisible)
          }}>
          <View style={{ marginTop: 22, flex: 1 }}>
            <View style={{alignItems: 'center'}}>
              <Text>asdasd</Text>
              <Image source={{ uri: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg' }} style={{ width: 150, height: 150 }}></Image>              
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleLabel: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: '700'
  },
  productCard: {
    height: 150, borderWidth: 0.5, borderColor: '#ccc', width: 150, marginRight: 20
  }
})
export default Toolbar