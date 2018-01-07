import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class Deck extends React.Component {
  handleQuiz() {
    const { navigation } = this.props
    const { navigate } = navigation
    const { deck } = navigation.state.params
    if (deck.cards.length === 0) {
      alert('You have to add some cards before starting quiz.')
      return
    } else {
      navigate('Quiz')
    }
  }
  render() {
    const { navigation } = this.props
    const { navigate } = navigation
    const { deck } = navigation.state.params
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deckName}>{deck.title}</Text>
          <Text style={styles.deckCardsQty}>{deck.cards.length} cards</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigate('AddCardToDeck')}>
            <Text style={styles.deckBtns}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleQuiz()}>
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
    fontSize: 30,
    textAlign: 'center'
  },
  deckCardsQty: {
    padding: 5,
    fontSize: 20,
    color: 'gray',
    textAlign: 'center'
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

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Deck)
