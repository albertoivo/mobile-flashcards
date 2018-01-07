import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'FlashcardMobile'

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(req => JSON.parse(req))
    .then(json => console.log(json))
    .catch(error => console.log('error!'))
}

export function submitDeck(title) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [title]: title
    })
  )
}
