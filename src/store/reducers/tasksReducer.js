const initialState = {

}

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASKS": {
          return {
              ...state,
              tasks: action.payload
          }
        }
        case "ADD_TASK": {
          return {
              ...state,
              tasks: [
                ...state.tasks,
                action.payload
              ]
          }
        }
        case "TASK_TOGGLE": {
          const tasks = state.tasks
          const newTasks = tasks.map(item => {
            if (item.id === action.id) {
              item.completed = !item.completed
            }
            return item;
          })
          return {
              ...state,
              tasks: newTasks
          }
        }
        default:
          return state
    }
}