import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, View } from 'native-base';
import { StyleSheet } from 'react-native'

class Toolbar extends Component {
  render() {
    return (
      <Container>
        <Content style={{flexDirection: 'row'}}>
          <View>
            <Text>asdasdasd</Text>
            </View>

          <View>
            <Text>asdasdasd</Text>
          </View>
          <View>
            <Text>asdasdasd</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

})

export default Toolbar