export function addTasks(tasks) {
    return {
        type: "ADD_TASKS",
        payload: tasks
    }
}

export function addTask(task) {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

