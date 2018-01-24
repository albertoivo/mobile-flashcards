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
import uuidv1 from 'uuid/v1'
import { addDeck } from '../actions'
import { submitDeck } from '../utils/api'
import { white, purple } from '../utils/colors'

class AddDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '', cards: [], cardIndex: 0, score: 0 }
  }

  handleSubmitBtn = () => {
    const { title, cards, cardIndex, score } = this.state
    const { dispatch, navigation } = this.props

    if (title && title.trim().length > 0) {
      const id = uuidv1()
      dispatch(addDeck({ id, title, cards, cardIndex, score }))
      submitDeck({ id, title, cards, cardIndex, score })
      navigation.goBack()
    }
  }

  handleDeckTitle = title => {
    this.setState({ title: title })
  }

  render() {
    const { title } = this.state
    return (
      <View style={styles.container} keyboardVerticalOffset={0}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleDeckTitle}
          placeholder="Deck Title"
          returnKeyType="done"
          maxLength={40}
          multiline={true}
          onSubmitEditing={() => this.handleSubmitBtn()}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSubmitBtn()}
          disabled={this.state.title.length === 0}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    margin: 20,
    alignSelf: 'center'
  },
  buttonText: {
    color: white,
    fontSize: 20
  },
  question: {
    padding: 20,
    alignSelf: 'center',
    fontSize: 30,
    textAlign: 'center'
  },
  input: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10
  }
})

export default connect()(AddDeck)
