import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Navbar, TodoList } from './components'
import { Provider } from 'react-redux'
import { store } from './redux'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navbar />
        <TodoList />
      </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
