import React from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTask } from '../redux'
import { TodoBoard } from './TodoBoard'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const tasks = useSelector(({task: {tasks}}) => tasks)
  const dispatch = useDispatch()

  const handleToggleTask = id => {
    dispatch(toggleTask(id))
  }

  return (
    <FlatList
      ListHeaderComponent={TodoBoard}
      data={tasks}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <TodoItem handleToggleTask={handleToggleTask} {...item} />}>
    </FlatList>
  )
}
