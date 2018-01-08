import {
  ADD_DECK,
  RECEIVE_DECKS,
  ADD_CARD_TO_DECK
} from '../actions/ActionTypes'

export default function decks(state = { decks: [] }, action) {
  switch (action.type) {
    case ADD_DECK: {
      const newDeck = state.decks.slice()
      newDeck.push(action.deck)
      return {
        ...state,
        decks: newDeck
      }
    }
    case RECEIVE_DECKS: {
      return Object.assign({}, state, {
        decks: action.decks
      })
    }
    case ADD_CARD_TO_DECK: {
      return {
        ...state,
        decks: state.decks.map(deck => {
          if (deck.id === action.deckId) {
            return {
              ...deck,
              decks: deck.cards.push(action.card)
            }
          }
          return deck
        })
      }
    }
    default:
      return state
  }
}
