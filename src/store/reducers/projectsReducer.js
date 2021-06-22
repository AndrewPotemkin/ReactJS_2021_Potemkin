const initialState = {

}

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
      case "ADD_DATA": {
          return {
              ...state,
              data: action.payload
          }
      }
      case "ADD_PROJECT": {
        return {
            ...state,
            data: [
                ...state.data,
                action.payload
            ]
        }
    }
      default:
        return state
  }
}