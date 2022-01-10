import {FilterValueType} from "./TodolistReducer";

export enum TasksActionsType{
    RemoveTask='REMOVE_TASK',
    ChangeTaskStatus='CHANGE_TASK_STATUS',
    AddTask='ADD_TASK',
    changeTaskTitle='CHANGE_TASK_TITLE',
    addNewTodo='ADD_NEW_TODO',
    changeTasksFilter='CHANGE_TASK_FILTER'
}

export type RemoveTaskActionType = ReturnType<typeof RemoveTaskAC>
export const RemoveTaskAC = (taskId: string, todolistId: string) => {
    return {type: TasksActionsType.RemoveTask, taskId: taskId, todolistId: todolistId} as const
}

export type changeTaskStatusAC = ReturnType<typeof ChangeTaskStatusAC>
export const ChangeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {type: TasksActionsType.ChangeTaskStatus, taskId: taskId, isDone: isDone, todolistId: todolistId} as const
}

export type AddTaskActionType = ReturnType<typeof AddTaskAC>
export const AddTaskAC = (title: string, todolistId: string) => {
    return {type: TasksActionsType.AddTask, title: title, todolistId: todolistId} as const
}

export type changeTaskTitleType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
    return {type: TasksActionsType.changeTaskTitle, title: title, taskId: taskId, todolistId: todolistId} as const
}

export type addNewTodoType = ReturnType<typeof addNewTodoAC>
export const addNewTodoAC = (newTodolistId: string) => {
    return {type: TasksActionsType.addNewTodo, newTodolistId: newTodolistId} as const
}

export type changeTasksFilterType = ReturnType<typeof changeTasksFilterAC>
export const changeTasksFilterAC = (todolistId: string, filter: FilterValueType) => {
    return {type: TasksActionsType.changeTasksFilter, todolistId, filter} as const
}