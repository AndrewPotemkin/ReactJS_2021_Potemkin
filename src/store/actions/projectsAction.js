export function addData(data) {
    return {
        type: "ADD_DATA",
        payload: data
    }
}

export function taskToggler(id) {
    return {
        type: "TASK_TOGGLE",
        id
    }
}