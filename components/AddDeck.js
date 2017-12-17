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
    //flexDirection: 'column',
    //alignItems: 'stretch'
  }
})

export default connect()(AddDeck)
