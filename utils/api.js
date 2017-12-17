import { AsyncStorage } from 'react-native'

export const KEY = 'FlashcardMobile'

export const getDecks = () => {
  return AsyncStorage.getItem(KEY)
}

export function addDeck({ title }) {
  return AsyncStorage.mergeItem(
    KEY,
    JSON.stringify({
      [title]: title
    })
  )
}
