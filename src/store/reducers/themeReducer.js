const initialState = {
    isDark: false
}

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case "THEME_TOGGLER": {
            return {
                isDark: !state.isDark
            }
        }
        default:
            return state
    }
}