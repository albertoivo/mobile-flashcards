import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { red } from '../utils/colors'

class Answer extends React.Component {
  render() {
    const { navigation } = this.props
    const { navigate } = navigation
    const { answer } = navigation.state.params
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.answerText}>{answer}</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={[styles.answerBtn, { backgroundColor: 'green' }]}>
              Correct
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
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

export default connect()(Answer)
