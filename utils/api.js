import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'ivo:flashcard'

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(req => JSON.parse(req))
}

export function submitDeck(deck) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  )
}

export function removeDeck(deck_id) {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    data[deck_id] = undefined
    delete data[deck_id]
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  })
}
