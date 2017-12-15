import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { black } from './utils/colors'
import { Constants } from 'expo'
import ViewDeck from './components/ViewDeck'
import ViewCard from './components/ViewCard'

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Deck: {
    screen: ViewDeck,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: () => <MaterialCommunityIcons name="cards" size={30} />
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar backgroundColor={black} barStyle="light-content" />
        <Tabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
