import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { resetScoreAndIndex } from '../actions'
import { red } from '../utils/colors'

class Score extends React.Component {
  componentWillUnmount() {
    const { id } = this.props.navigation.state.params
    this.props.dispatch(resetScoreAndIndex(id))
  }

  home() {
    this.props.navigation.navigate('Home')
    const { id } = this.props.navigation.state.params
    this.props.dispatch(resetScoreAndIndex(id))
  }

  render() {
    const { score } = this.props.myDeck[0]
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
            You missed more than 60% of the deck. Better luck next time...
          </Text>
        )}
        <TouchableOpacity onPress={() => this.home()}>
          <Text style={styles.homeBtn}>Home</Text>
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
    myDeck: state.decks.filter(deck => deck.id === navigation.state.params.id)
  }
}

export default connect(mapStateToProps)(Score)
