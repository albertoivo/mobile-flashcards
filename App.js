import React from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import reducer from './reducers'
import { red } from './utils/colors'
import { Constants } from 'expo'
import DeckGrid from './components/DeckGrid'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import Answer from './components/Answer'
import AddCardToDeck from './components/AddCardToDeck'

const store = configureStore()

const AppStatusBar = () => (
  <View style={{ backgroundColor: 'black', height: Constants.statusBarHeight }}>
    <StatusBar translucent barStyle="light-content" />
  </View>
)

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckGrid,
    navigationOptions: {
      title: 'Decks',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'Add a Deck',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  AddCardToDeck: {
    screen: AddCardToDeck,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Question',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  Answer: {
    screen: Answer,
    navigationOptions: {
      title: 'Answer',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={'black'} />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
