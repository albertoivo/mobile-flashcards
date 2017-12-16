import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { white, purple } from '../utils/colors'
import { addDeck, getDecks } from '../utils/api'

class AddDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  handleSubmitBtn = title => {
    if (title && title.trim().length > 0) {
      addDeck(title)
      this.props.navigation.goBack()
      getDecks()
    } else {
      alert('Title must be filled in!')
    }
  }

  handleDeckTitle = title => {
    this.setState({ title: title })
  }

  render() {
    const { title } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleDeckTitle}
          placeholder="Deck Title"
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSubmitBtn(title)}
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
    margin: 25,
    height: 40
  }
})

export default AddDeck
