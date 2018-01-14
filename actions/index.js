import {
  ADD_DECK,
  RECEIVE_DECKS,
  ADD_CARD_TO_DECK,
  QUIZ_RESULT,
  RESET_SCORE_AND_INDEX
} from './ActionTypes'

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

export function quizResult(deckId, myAnswer) {
  return {
    type: QUIZ_RESULT,
    deckId,
    myAnswer
  }
}

export function resetScoreAndIndex(deckId) {
  return {
    type: RESET_SCORE_AND_INDEX,
    deckId
  }
}
