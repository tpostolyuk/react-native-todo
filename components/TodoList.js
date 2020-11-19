import React, { useState } from 'react'
import { View, StyleSheet, Alert, FlatList, ScrollView } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'

import { uuidv4 } from '../helpers'

import { addTask, clearTask, toggleTask } from '../redux'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const tasks = useSelector(({task: {tasks}}) => tasks)

  const handleAddTask = () => {
    if (!title) {
      Alert.alert('Input should be filled')
    } else {
      dispatch(addTask({ id: uuidv4(), title, isChecked: false }))
      setTitle('')
    }
  }

  const handleToggleTask = id => {
    dispatch(toggleTask(id))
  }

  const handleClearTask = () => {
    dispatch(clearTask())
  }

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <View style={{ flexDirection: 'row', }}>
          <View style={styles.inputContainer}>
            <Input onSubmitEditing={handleAddTask} value={title} onChangeText={setTitle} placeholder='Enter task' />
          </View>
          <View style={styles.btnContainer}>
            <Button disabled={!title} onPress={handleAddTask} title="Add" type="outline" />
          </View>
        </View>
        <View style={{ width: '90%', justifyContent: 'center' }}>
          <Button onPress={handleClearTask} title="Clear All Task" />
        </View>
      </View>
        <FlatList 
          data={tasks}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <TodoItem handleToggleTask={handleToggleTask} {...item} />}>
        </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  board: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '20%',
  },
  inputContainer: {
    marginTop: 10,
    width: '75%'
  },
  btnContainer: {
    marginTop: 12,
    width: '20%'
  }
})
