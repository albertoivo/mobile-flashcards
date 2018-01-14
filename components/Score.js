import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { resetScoreAndIndex } from '../actions'

class Score extends React.Component {
  componentWillUnmount() {
    const { id } = this.props.navigation.state.params
    this.props.dispatch(resetScoreAndIndex(id))
  }

  handleScore() {
    this.props.navigation.navigate('Home')
    const { id } = this.props.navigation.state.params
    this.props.dispatch(resetScoreAndIndex(id))
  }
  render() {
    const { score } = this.props.myDeck[0]
    const { id, cardsLength } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>Your score on this deck was:</Text>
        <Text style={styles.score}>{score}</Text>
        {score * (100 / cardsLength) > 33 ? (
          <Text>Congratulations!!!</Text>
        ) : (
          <Text>Better luck next time...</Text>
        )}
        <TouchableOpacity onPress={() => this.handleScore()}>
          <Text style={styles.okBtn}>Home</Text>
        </TouchableOpacity>
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
  score: {
    fontSize: 60
  },
  scoreText: {
    fontSize: 24
  },
  okBtn: {
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
    myDeck: state.decks.filter(deck => deck.id === navigation.state.params.id)
  }
}

export default connect(mapStateToProps)(Score)
