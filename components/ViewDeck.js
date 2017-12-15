import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ViewDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.deckName}>This is a deck</Text>
          <Text style={styles.cardTotalNumber}>3 cards</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  deck: {
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 20
  },
  deckName: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: 30
  },
  cardTotalNumber: {
    opacity: 0.8,
    padding: 5,
    fontSize: 20
  }
})
