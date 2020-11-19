import React from 'react'
import { View } from 'react-native'
import { CheckBox, Button } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export const TodoItem = ({ id, title, isChecked, handleToggleTask }) => {
  const dispatch = useDispatch()

  const renderLeftActions = () => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: 80, height: 50 }}>
        <Button 
          buttonStyle={{ backgroundColor: 'whitesmoke', height: 45, width: 45, marginTop: 5, borderWidth: 1, borderColor: 'black' }}
          onPress={() => dispatch(deleteTask(id))}
          title="&#10060;"
          type="solid"
        />
      </View>
    )
  }

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      friction={4}
      leftThreshold={20}
    >
      <CheckBox
        checked={isChecked}
        onPress={() => handleToggleTask(id)}
        title={title}
        checkedColor="green"
        textStyle={{ color: `${isChecked ? 'green' : 'black'}`, textDecorationLine: `${isChecked ? 'line-through' : 'none'}` }}
        uncheckedColor="red"
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
      />
    </Swipeable>
  )
}
