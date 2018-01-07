import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

const AddCardToDeck = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Question"
        maxLength={40}
        multiline={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Answer"
        maxLength={40}
        multiline={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    margin: 20,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(AddCardToDeck)
