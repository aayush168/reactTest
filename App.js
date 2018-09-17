import React from 'react';
import { View } from 'react-native';
import { SwitchNavigator, TabNavigator } from 'react-navigation'
import { Main, OrderSummary } from "./src/screens";

const Tabs = TabNavigator({
  home: Main,
  summary: OrderSummary
})

const MainStack = SwitchNavigator({
  main: Tabs
})

export default class App extends React.Component {
  render() {
    return <MainStack/>
  }
}