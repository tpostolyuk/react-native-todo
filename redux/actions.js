export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const CLEAR_TASK = "CLEAR_TASK"
export const TOGGLE_TASK = "TOGGLE_TASK"


export const addTask = payload => {
  return {
    type: ADD_TASK,
    payload
  }
}

export const deleteTask = payload => {
  return {
    type: DELETE_TASK,
    payload
  }
}

export const toggleTask = payload => {
  return {
    type: TOGGLE_TASK,
    payload
  }
}

export const clearTask = () => ({ type: CLEAR_TASK })
