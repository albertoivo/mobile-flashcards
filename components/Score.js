import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Score extends React.Component {
  componentDidMount() {
    console.log('****   componentDidMount   ****')
  }

  componentWillUnmount() {
    console.log('****   componentWillUnmount   ****')
  }

  handleScore() {
    console.log(this.props.navigation)
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.score}>{this.props.myDeck[0].score}</Text>
        <TouchableOpacity onPress={() => this.handleScore()}>
          <Text style={{ backgroundColor: 'green' }}>Correct</Text>
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

export default connect(mapStateToProps)(Score)
