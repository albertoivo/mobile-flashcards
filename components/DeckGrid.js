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
  render() {
    const { navigate } = this.props.navigation
    const { decks } = this.props

    return (
      <ScrollView style={{ flex: 1 }}>
        {decks.map((deck, index) => (
          <TouchableOpacity
            key={index}
            style={styles.deck}
            onPress={() => navigate('Deck', { deck })}
          >
            <Text style={styles.deckName}>{deck.title}</Text>
            <Text style={styles.deckCardsQty}>{deck.cards.length} cards</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity onPress={() => navigate('AddDeck')}>
          <Text style={styles.addDeckBtnText}>Add a new Deck</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
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
  addDeckBtnText: {
    color: 'white',
    backgroundColor: red,
    marginTop: 15,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden'
  }
})

function mapStateToProps(state) {
  return { decks: state.decks || [] }
}

export default connect(mapStateToProps)(DeckGrid)
