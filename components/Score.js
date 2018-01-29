import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { clearLocalNotification } from '../utils/notifications'
import { resetScoreAndIndex } from '../actions'
import { red } from '../utils/colors'

class Score extends React.Component {
  componentWillUnmount() {
    const { id } = this.props.navigation.state.params
    this.props.dispatch(resetScoreAndIndex(id))
    clearLocalNotification()
  }

  restartQuiz() {
    const { navigation, deck } = this.props
    navigation.navigate('Quiz', deck)
  }

  backToDeck() {
    const { navigation, deck } = this.props
    navigation.navigate('Deck', { deck })
  }

  render() {
    const { score } = this.props.deck
    const { id, cardsLength } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>Your score on this deck was:</Text>
        <Text style={{ fontSize: 60 }}>
          {score} of {cardsLength}
        </Text>
        {score / cardsLength > 0.6 ? (
          <Text style={styles.congrats}>Congratulations!!!</Text>
        ) : (
          <Text style={styles.betterLuck}>
            Your score was less than 60% of the deck. Better luck next time...
          </Text>
        )}
        <View>
          <TouchableOpacity onPress={() => this.restartQuiz()}>
            <Text style={styles.homeBtn}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.backToDeck()}>
            <Text style={styles.homeBtn}>Back to Deck</Text>
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  congrats: {
    margin: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green'
  },
  betterLuck: {
    margin: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    color: red
  },
  homeBtn: {
    color: 'white',
    backgroundColor: 'black',
    paddingTop: 12,
    paddingBottom: 12,
    width: 250,
    borderRadius: 10,
    margin: 4,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden'
  }
})

const mapStateToProps = (state, { navigation }) => {
  return {
    deck: state.decks.find(deck => deck.id === navigation.state.params.id)
  }
}

export default connect(mapStateToProps)(Score)
