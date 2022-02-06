import {FilterValueType} from "./TodolistReducer";
import {SpaceTaskType, tasksSpaceApi} from "../../API/SpaceAPI";
import {SpaceThunksType} from "./store";

export enum TasksActionsType {
    RemoveTask = 'REMOVE_TASK',
    ChangeTaskStatus = 'CHANGE_TASK_STATUS',
    AddTask = 'ADD_TASK',
    changeTaskTitle = 'CHANGE_TASK_TITLE',
    addNewTodo = 'ADD_NEW_TODO',
    changeTasksFilter = 'CHANGE_TASK_FILTER',
    getSpaceTasks = 'getSpaceTasks'
}

export type RemoveTaskActionType = ReturnType<typeof RemoveTaskAC>
export const RemoveTaskAC = (todolistId: string, taskId: string) => {
    return {type: TasksActionsType.RemoveTask, taskId: taskId, todolistId: todolistId} as const
}

export type changeTaskStatusAC = ReturnType<typeof ChangeTaskStatusAC>
export const ChangeTaskStatusAC = (todolistId: string, taskId: string, item: SpaceTaskType) => {
    return {type: TasksActionsType.ChangeTaskStatus, taskId: taskId, item, todolistId: todolistId} as const
}

export type AddTaskActionType = ReturnType<typeof AddTaskAC>
export const AddTaskAC = (todolistId: string, newTask: SpaceTaskType) => {
    return {type: TasksActionsType.AddTask, todolistId, newTask} as const
}

export type addNewTodoType = ReturnType<typeof addNewTodoAC>
export const addNewTodoAC = (newTodolistId: string) => {
    return {type: TasksActionsType.addNewTodo, newTodolistId: newTodolistId} as const
}

export type changeTasksFilterType = ReturnType<typeof changeTasksFilterAC>
export const changeTasksFilterAC = (todolistId: string, filter: FilterValueType) => {
    return {type: TasksActionsType.changeTasksFilter, todolistId, filter} as const
}
export type getTasksType = ReturnType<typeof getTasksAC>
export const getTasksAC = (todolistId: string, items: SpaceTaskType[]) => {
    return {type: TasksActionsType.getSpaceTasks, todolistId, items} as const
}
export const getTaskTC = (todolistId: string): SpaceThunksType => async (dispatch) => {
    try {
        let res = await tasksSpaceApi.getTasks(todolistId)
        dispatch(getTasksAC(todolistId, res.data.items))
    } catch (e) {
        console.log(e)
    }
}
export const createTaskTC = (todolistId: string, title: string): SpaceThunksType => async (dispatch) => {
    try {
        let res = await tasksSpaceApi.createTask(todolistId, title)
        dispatch(AddTaskAC(todolistId, res.data.data.item))
    } catch (e) {
        console.log(e)
    }
}
export const deleteTaskTC = (todolistId: string, taskId: string): SpaceThunksType => async (dispatch) => {
    try {
        await tasksSpaceApi.deleteTask(todolistId, taskId)
        dispatch(RemoveTaskAC(todolistId, taskId))
    } catch (e) {
        console.log(e)
    }
}
export const updateTaskTC = (todolistId: string, taskId: string, title: string, status?: number): SpaceThunksType => async (dispatch) => {
    try {
        debugger
        let res = await tasksSpaceApi.updateTask(todolistId, taskId, title, status)
        dispatch(ChangeTaskStatusAC(todolistId, taskId, res.data.data.item))
    } catch (e) {
        console.log(e)
    }
}