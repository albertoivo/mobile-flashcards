import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import DeckGrid from './DeckGrid'
import AddDeck from './AddDeck'

const Home = () => <MainNavigator />

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckGrid
  },
  AddDeck: {
    screen: AddDeck
  }
})

export default Home
