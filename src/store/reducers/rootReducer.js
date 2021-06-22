import {combineReducers} from 'redux'
import projectsReducer from "./projectsReducer"
import themeReducer from "./themeReducer"
import tasksReducer from "./tasksReducer"

export default combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer,
    theme: themeReducer,
})