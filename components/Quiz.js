import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { red } from '../utils/colors'

class Quiz extends React.Component {
  render() {
    const { navigation } = this.props
    const { navigate } = navigation
    const { cards } = navigation.state.params

    return (
      <View style={styles.container}>
        {cards.map((card, index) => (
          <TouchableOpacity
            style={styles.container}
            key={index}
            onPress={() => navigate('Answer', card)}
          >
            <Text style={styles.question}>{card.question}</Text>
            <Text style={styles.seeTheAnswer}>
              Touch the screen to see the answer
            </Text>
          </TouchableOpacity>
        ))}
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

export default connect()(Quiz)
