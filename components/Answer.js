import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { quizResult } from '../actions'
import { red } from '../utils/colors'

class Answer extends React.Component {
  handleCorrect() {
    const { dispatch, navigation, myDeck } = this.props
    const { id, cardsLength } = navigation.state.params

    dispatch(quizResult(id, 'correct'))
    if (this.isItFinished()) {
      navigation.navigate('Score', {
        id: id,
        cardsLength: cardsLength
      })
    } else {
      navigation.goBack()
    }
  }
  handleWrong() {
    const { dispatch, navigation, myDeck } = this.props
    const { id, cardsLength } = navigation.state.params

    dispatch(quizResult(id, 'wrong'))
    if (this.isItFinished()) {
      navigation.navigate('Score', {
        id: id,
        cardsLength: cardsLength
      })
    } else {
      navigation.goBack()
    }
  }
  isItFinished() {
    const { cardIndex, cardsLength } = this.props.navigation.state.params
    return cardsLength - 1 === cardIndex
  }
  render() {
    const { navigation } = this.props
    const { navigate } = navigation
    const { answer } = navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={styles.answerText}>{answer}</Text>
        <View>
          <TouchableOpacity onPress={() => this.handleCorrect()}>
            <Text style={[styles.answerBtn, { backgroundColor: 'green' }]}>
              Correct
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleWrong()}>
            <Text style={[styles.answerBtn, { backgroundColor: red }]}>
              Wrong
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  answerText: {
    fontSize: 24
  },
  answerBtn: {
    color: 'white',
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
    myDeck: state.decks.filter(deck => deck.id === navigation.state.params.id)
  }
}

export default connect(mapStateToProps)(Answer)
