import { ADD_DECK, RECEIVE_DECKS } from '../actions/ActionTypes'

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK: {
      console.log('******* add deck', action.deck)
      return Object.assign({}, state, {
        deck: action.deck
      })
    }
    case RECEIVE_DECKS: {
      console.log('******* receive decks', action.decks)
      return Object.assign({}, state, {
        decks: action.decks
      })
    }
    default:
      return state
  }
}

export default decks
