import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { black, red, white } from './utils/colors'
import { Constants } from 'expo'
import Home from './components/Home'
import DeckGrid from './components/DeckGrid'
import AddDeck from './components/AddDeck'

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckGrid
  },
  AddDeck: {
    screen: AddDeck
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar backgroundColor={black} barStyle="light-content" />
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addDeckBtn: {
    backgroundColor: 'red',
    color: white,
    alignSelf: 'flex-end'
  }
})
