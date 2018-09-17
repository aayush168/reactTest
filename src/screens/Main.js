import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Coffee Store</Text>
        <Image 
          style={{  width: 100+'%', height: 300, marginVertical: 15}}
          source={{ uri: 'https://lh3.googleusercontent.com/Pqdgd75cCb9hApPPyDBlNXUwKU7yipmZaWFG4OlmCYhrYafavH5HSjEPcuXDmTAHhzBZqd2wmwkqQXEY_uPZJtbRMyc'}}
        />
        <Text style={styles.content}>
          Rs. 100
        </Text>
        <Text style={styles.content}>
          A shot of Expresso mixed with foamed milk.
        </Text>
        <View style={styles.button}>
          <Button
            onPress={() => this.addToCart()}
            title="Add To Cart"
          />
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
    textAlign: 'center',
    fontSize: 25,
    color: '#111',
    marginVertical: 15
  },
  content: {
    marginVertical: 10,
    textAlign: 'center'
  },
  button: {
    width: 150
  }
})

export default Main