import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import { Text } from 'react-native'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" onChangeText={(text) => this.setState({ username: text })} value={this.state.username} />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default Login;
