import { ADD_TASK, DELETE_TASK, CLEAR_TASK, TOGGLE_TASK } from "./actions"

const initialState = {
  tasks: [
    { id: 'ecawecaww4v34v1', title: 'Make a coffee', isChecked: true },
    { id: 'cr3v5345v345v2c', title: 'Do a homework', isChecked: false },
    { id: 'vt346b5ynryectr', title: 'Buy a milk', isChecked: false },
  ]
}

export const taskReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload]
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== payload)
      }

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(item => item.id === payload ? { ...item, isChecked: !item.isChecked } : item)
      }

    case CLEAR_TASK:
      return {
        ...state,
        tasks: []
      }
    default: return state
  }
}