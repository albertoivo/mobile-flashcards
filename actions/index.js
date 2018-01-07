import { ADD_DECK, RECEIVE_DECKS, ADD_CARD_TO_DECK } from './ActionTypes'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCardToDeck(card, deckId) {
  return {
    type: ADD_CARD_TO_DECK,
    card,
    deckId
  }
}
