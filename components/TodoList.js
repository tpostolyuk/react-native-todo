import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getVisibleTodos } from '../helpers'
import { toggleTask } from '../redux'
import { allTasks } from '../redux/selectors'
import { TodoBoard } from './TodoBoard'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const [selectedValue, setSelectedValue] = useState('all')
  const tasks = useSelector(allTasks)
  const filteredTasks = getVisibleTodos(tasks, selectedValue)
  const dispatch = useDispatch()

  const handleToggleTask = id => {
    dispatch(toggleTask(id))
  }

  return (
    <FlatList
      ListHeaderComponent={() => <TodoBoard selectedValue={selectedValue} setSelectedValue={setSelectedValue} />}
      data={filteredTasks}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <TodoItem handleToggleTask={handleToggleTask} {...item} />}>
    </FlatList>
  )
}
