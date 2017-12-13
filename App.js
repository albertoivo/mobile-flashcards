import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ViewDeck from './components/ViewDeck'
import ViewCard from './components/ViewCard'

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
