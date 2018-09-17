import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class OrderSummary extends Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      quantity: 0
    }
  }
  addToCart = () => {
    this.setState({
      total: this.state.total + 100,
      quantity: this.state.quantity + 1
    })
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Summary</Text>
        <View style={styles.button}>
          <Button
            onPress={() => this.addToCart()}
            title="Add To Cart"
          />
        </View>
        <View>
          <Text style={styles.content}>Total</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: 100 + '%',
    height: 100 + '%',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  button: {
    width: 150,
    marginVertical: 10
  },
  content: {

  }
})

export default OrderSummary