export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(t => t.isChecked)
    case 'todo':
      return todos.filter(t => !t.isChecked)
  }
}
