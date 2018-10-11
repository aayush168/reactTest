import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from '../firebase/init'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
      console.log(res)
    }).catch(function (error) {
      console.log(error.code, error.message)
    });
  }
  signup = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
      console.log(res)
    }).catch(function (error) {
      console.log(error.code, error.message)
    });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{ height: 40, width: 250, marginBottom: 20 }}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Email'
        />
        <TextInput
          style={{ height: 40, width: 250 }}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Password'
          secureTextEntry={true}
        />
        <View style={{width: 250, marginVertical: 20 }}>
          <Button
            onPress={() => this.login(this.state.email, this.state.password)}
            title="Log In"
            color="#841584"
            accessibilityLabel="Login"
          />
        </View>
        <View style={{ width: 250 }}>        
          <Button
            onPress={() => this.signup(this.state.email, this.state.password)}
            title="Sign-Up"
            color="#841584"
            accessibilityLabel="Sign-Up"         
          />
        </View>
      </View>
    );
  }
}

export default Auth