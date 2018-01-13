import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
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
              answer: myDeck[0].cards[myDeck[0].cardIndex].answer,
              id: myDeck[0].id
            })
          )}
      >
        <Text style={styles.question}>
          {myDeck[0].cards[myDeck[0].cardIndex].question}
        </Text>
        <Text style={styles.seeTheAnswer}>
          Touch the screen to see the answer
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
    myDeck: state.decks.map(deck => {
      if (deck.id === navigation.state.params.id) {
        return {
          ...deck
        }
      }
    })
  }
}

export default connect(mapStateToProps)(Quiz)
