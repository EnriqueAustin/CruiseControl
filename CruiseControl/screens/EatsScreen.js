import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>EatsScreen</Text>
    </View>
  )
}

export default EatsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})