import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ViewDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Deck</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
