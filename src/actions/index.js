import * as types from './../constants/ActionType';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task
    }
}

export const toggleForm = (task) => {
    return {
        type: types.TOGGLE_FORM,
        task
    }
}

export const closeForm = (task) => {
    return {
        type: types.CLOSE_FORM,
        task
    }
}

export const openForm = (task) => {
    return {
        type: types.OPEN_FORM,
        task
    }
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id // id: id
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id // id: id
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}