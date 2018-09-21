import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products'

class OrderSummary extends Component {
  componentWillMount() {
    this.props.apiFetchProducts();
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
          {this.props.products.map(x => {
            return (
              <View key={x.id}>
                <Text>{x.employee_name}</Text>
              </View>
            )
          })}
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

function mapStateToProps(state) {
  console.log(state.products);
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiFetchProducts() {
      dispatch(fetchProducts())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);