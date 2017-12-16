import { AsyncStorage } from 'react-native'

export const KEY = 'FlashcardMobile'

export const getDecks = () => {
  try {
    Promise.all(
      AsyncStorage.getAllKeys().then(keys =>
        keys
          .map(key => AsyncStorage.getItem(key))
          .then(items => console.log(items))
      )
    )
  } catch (error) {
    console.log(error)
  }
}

export function addDeck({ title }) {
  return AsyncStorage.mergeItem(
    KEY,
    JSON.stringify({
      [title]: title
    })
  )
}
