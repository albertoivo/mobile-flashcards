import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { red } from '../utils/colors'

class Quiz extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigate('Answer')}
      >
        <Text style={styles.question}>This is a question</Text>
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

export default connect()(Quiz)
