import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class Deck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.deckName}>Deck 6</Text>
        <Text style={styles.deckCardsQty}>3 cards</Text>
        <TouchableOpacity>
          <Text style={styles.addCardBtn}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.startQuizBtn}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckName: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: 30
  },
  deckCardsQty: {
    padding: 5,
    fontSize: 20,
    color: 'gray'
  },
  addCardBtn: {
    height: 40,
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    margin: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  startQuizBtn: {
    height: 40,
    width: 250,
    borderWidth: 2,
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden'
  }
})
