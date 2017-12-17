import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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
      <View style={styles.container}>
        <TouchableOpacity style={styles.deck}>
          <Text style={styles.deckName}>Deck 1</Text>
          <Text style={styles.deckCardsQty}>3 cards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('AddDeck')}>
          <Text style={styles.addDeckBtn}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
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
    textAlign: 'center',
    textAlignVertical: 'center',
    color: red,
    fontSize: 40,
    fontWeight: 'bold',
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: red,
    borderRadius: 30,
    margin: 10,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  }
})

function mapStateToProps(state) {
  console.log('*** MEU ESTADO DE DECKS:', state)
  return { decks: state || [] }
}

export default connect(mapStateToProps)(DeckGrid)
