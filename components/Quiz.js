import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { red } from '../utils/colors'

class Quiz extends React.Component {
  render() {
    const { navigation, myDeck } = this.props
    const { navigate } = navigation

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigate(
            'Answer',
            (info = {
              answer: myDeck.cards[myDeck.cardIndex].answer,
              id: myDeck.id,
              cardIndex: myDeck.cardIndex,
              cardsLength: myDeck.cards.length
            })
          )}
      >
        <Text>
          You have {myDeck.cards.length - myDeck.cardIndex} question(s) left
        </Text>
        <Text style={styles.question}>
          {myDeck.cards[myDeck.cardIndex].question}
        </Text>
        <Text style={styles.seeTheAnswer}>
          Touch anywhere to see the answer
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  question: {
    fontSize: 50
  },
  clickToAnswer: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  seeTheAnswer: {
    color: red
  }
})

const mapStateToProps = (state, { navigation }) => {
  return {
    myDeck: state.decks.find(deck => deck.id === navigation.state.params.id)
  }
}

export default connect(mapStateToProps)(Quiz)
