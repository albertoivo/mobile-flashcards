import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AddCardToDeck = () => {
  return (
    <View style={styles.container}>
      <Text>{this.props.navigation}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default AddCardToDeck
