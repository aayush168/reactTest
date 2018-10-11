import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Main, OrderSummary, Login } from "./src/components";


const PrimaryNav = createStackNavigator({
  Main: { screen: Main }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Main'
  })

export default class App extends React.Component {
  render() {
    return <PrimaryNav/>
  }
}