import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class Deck extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deckName}>Deck 6</Text>
          <Text style={styles.deckCardsQty}>3 cards</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigate('AddCardToDeck')}>
            <Text style={styles.deckBtns}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Quiz')}>
            <Text
              style={[
                styles.deckBtns,
                {
                  backgroundColor: 'black',
                  color: 'white'
                }
              ]}
            >
              Start Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
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
  deckBtns: {
    paddingTop: 12,
    paddingBottom: 12,
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    margin: 4,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden'
  }
})
