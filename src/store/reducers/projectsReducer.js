const initialState = {
  data: {
    projectsById: {},
    tasksByID: {}
  }
}

export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_DATA": {
            return {
                ...state,
                data: action.payload
            }
        }
        case "TASK_TOGGLE": {
          return {
              ...state,
              data: {
                ...state.data,
                tasksById: {
                  ...state.data.tasksById,
                  [action.id]: {
                    ...state.data.tasksById[action.id],
                    completed: !state.data.tasksById[action.id].completed
                  }
                }
              }

          }
      }
        default:
            return state
    }
}