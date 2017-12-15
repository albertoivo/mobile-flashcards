import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { white, red } from '../utils/colors'

export default class DeckGrid extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.deckName}>This is a deck</Text>
          <Text style={styles.cardTotalNumber}>3 cards</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddDeck')}
        >
          <Text style={styles.addDeckBtn}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
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
  },
  addDeckBtn: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: red,
    fontSize: 40,
    fontWeight: 'bold',
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: red,
    borderRadius: 30,
    margin: 10,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  }
})
