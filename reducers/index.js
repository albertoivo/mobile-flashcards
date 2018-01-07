import { ADD_DECK, RECEIVE_DECKS } from '../actions/ActionTypes'

function decks(state = { decks: [] }, action) {
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
    default:
      return state
  }
}

export default decks
