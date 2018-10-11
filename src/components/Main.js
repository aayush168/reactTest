import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products'
import Toolbar from './Toolbar';
import FeaturedProducts from './FeaturedProducts'

import Auth from '../components/Auth'

class Main extends Component {
  constructor(props) {
    super(props)
    console.log(this)
    this.props.getProducts()
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Toolbar/>
        <View style={{paddingHorizontal: 5, flex: 1}}>
          {/* <FeaturedProducts/> */}
          <Auth/>
        </View>
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts() {
      dispatch(fetchProducts())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
