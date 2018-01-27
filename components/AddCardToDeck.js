import React from 'react'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'
import * as api from '../utils/api'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

class AddCardToDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {},
      answer: {}
    }
  }

  handleSubmitBtn = () => {
    const { dispatch, navigation } = this.props
    const { deck } = navigation.state.params

    const card = {
      question: this.state.question,
      answer: this.state.answer
    }

    dispatch(addCardToDeck(card, deck.id))
    api.submitEntry(deck)
    navigation.goBack()
  }

  handleDeckQuestion = question => {
    this.setState({ question: question })
  }

  handleDeckAnswer = answer => {
    this.setState({ answer: answer })
  }

  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.input}
          placeholder="Question"
          maxLength={40}
          multiline={true}
          onChangeText={this.handleDeckQuestion}
        />

        <TextInput
          style={styles.input}
          placeholder="Answer"
          maxLength={40}
          multiline={true}
          onChangeText={this.handleDeckAnswer}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSubmitBtn()}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

export default connect()(AddCardToDeck)
