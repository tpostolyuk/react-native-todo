import React, { useState } from 'react'
import { View, Alert, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux'
import { uuidv4 } from '../helpers'
import { addTask, clearTask } from '../redux'

export const TodoBoard = ({ selectedValue, setSelectedValue }) => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (!title) {
      Alert.alert('Input should be filled')
    } else {
      dispatch(addTask({ id: uuidv4(), title, isChecked: false }))
      setTitle('')
    }
  }

  const handleClearTask = () => {
    dispatch(clearTask())
  }

  return (      
    <View style={styles.board}>
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.inputContainer}>
          <Input onSubmitEditing={handleAddTask} value={title} onChangeText={setTitle} placeholder='Enter task' />
        </View>
        <View style={styles.btnContainer}>
          <Button disabled={!title} onPress={handleAddTask} title="Add" type="outline" />
        </View>
      </View>
      <View style={{ width: '90%', justifyContent: 'center', flexDirection: 'row' }}>
        <Button onPress={handleClearTask} title="Clear All Task" buttonStyle={{ width: 200, height: 40 }} />
        <Picker
          selectedValue={selectedValue}
          style={{ height: 40, width: 150 }}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="All" value="all" />
        <Picker.Item label="Completed" value="completed" />
        <Picker.Item label="Todo" value="todo" />
      </Picker>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 120,
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
