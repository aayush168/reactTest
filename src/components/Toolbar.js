import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View, Text } from 'react-native'

class Toolbar extends Component {
  render() {
    return (
      <Header style={{}}>
        <Left>
          <Title style={{paddingLeft: 10}}>Products</Title>
        </Left>
        <Right>
          <Icon name='home'/>
          </Right>
      </Header>
    );
  }
}

export default Toolbar