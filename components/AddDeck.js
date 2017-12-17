import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { white, purple } from '../utils/colors'
import { addDeck } from '../actions'

class AddDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  handleSubmitBtn = () => {
    const { title } = this.state
    if (title && title.trim().length > 0) {
      this.props.dispatch(addDeck({ title }))
      alert(`${title} created. Now add some cards and have fun.`)
      this.props.navigation.goBack()
    }
  }

  handleDeckTitle = title => {
    this.setState({ title: title })
  }

  render() {
    const { title } = this.state
    return (
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={0}
        behavior="position"
      >
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleDeckTitle}
          placeholder="Deck Title"
          returnKeyType="done"
          maxLength={50}
          multiline={true}
          onSubmitEditing={() => this.handleSubmitBtn()}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSubmitBtn()}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    alignSelf: 'center',
    margin: 20
  },
  buttonText: {
    color: white,
    fontSize: 20
  },
  question: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 40,
    textAlign: 'center'
  },
  input: {
    fontSize: 40,
    textAlign: 'center',
    padding: 10
  }
})

export default connect()(AddDeck)
