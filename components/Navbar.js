import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Navbar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Todo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: '#252A31'
  }
})
