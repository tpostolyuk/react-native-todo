import { createSelector } from 'reselect'

export const tasks = state => state.task.tasks

export const completedTasks = createSelector(
  tasks,
  allTasks => allTasks.filter(item => item.isChecked)
)

export const todoTasks = createSelector(
  tasks,
  allTasks => allTasks.filter(item => !item.isChecked))

export const allTasks = createSelector(
  tasks,
  allTasks => allTasks
)
