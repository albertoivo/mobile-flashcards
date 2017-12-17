import React from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import reducer from './reducers'
import { black, red, white } from './utils/colors'
import { Constants } from 'expo'
import Home from './components/Home'
import DeckGrid from './components/DeckGrid'
import AddDeck from './components/AddDeck'

const store = configureStore()

const AppStatusBar = () => (
  <View style={{ backgroundColor: black, height: Constants.statusBarHeight }}>
    <StatusBar translucent barStyle="light-content" />
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
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={black} />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
