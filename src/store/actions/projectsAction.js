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

export function addProject(data) {
    return {
        type: "ADD_PROJECT",
        payload: data
    }
}