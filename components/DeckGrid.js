import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { receiveDecks } from '../actions'
import { white, red } from '../utils/colors'

class DeckGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: []
    }
  }

  componentDidMount() {
    this.props.dispatch(receiveDecks)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.decks !== nextProps.decks) {
      this.setState({ decks: nextProps.decks })
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.deck}>
          <Text style={styles.deckName}>Deck 1</Text>
          <Text style={styles.deckCardsQty}>3 cards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deck}>
          <Text style={styles.deckName}>Deck 2</Text>
          <Text style={styles.deckCardsQty}>3 cards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deck}>
          <Text style={styles.deckName}>Deck 3</Text>
          <Text style={styles.deckCardsQty}>3 cards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deck} onPress={() => navigate('Deck')}>
          <Text style={styles.deckName}>Deck 6</Text>
          <Text style={styles.deckCardsQty}>3 cards</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addDeckBtn}
          onPress={() => navigate('AddDeck')}
        >
          <Text style={styles.addDeckBtnText}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  deck: {
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 20
  },
  deckName: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: 30
  },
  deckCardsQty: {
    padding: 5,
    fontSize: 20,
    color: 'gray'
  },
  addDeckBtn: {
    position: 'absolute'
  },
  addDeckBtnText: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: red,
    borderRadius: 30,
    backgroundColor: red,
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    overflow: 'hidden'
  }
})

function mapStateToProps(state) {
  return { decks: state || [] }
}

export default connect(mapStateToProps)(DeckGrid)
