import {combineReducers} from 'redux'
import projectsReducer from "./projectsReducer"
import themeReducer from "./themeReducer"

export default combineReducers({
    projects: projectsReducer,
    theme: themeReducer,
})