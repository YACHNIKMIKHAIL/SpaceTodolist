import {FilterValueType} from "./TodolistReducer";

export enum TodolistsActionsType{
    RemoveTodo='REMOVE_TODO',
    AddTodo='ADD_TODO',
    ChangeTodoTitle='CHANGE_TODO_TITLE',
    ChangeTodoFilter='CHANGE_TODO_FILTER'
}
export type RemoveTodoActionType = {
    type: TodolistsActionsType.RemoveTodo
    id: string
}
export type AddTodoActionType = {
    type: TodolistsActionsType.AddTodo
    title: string
    newTodolistId: string
}
export type ChangeTodoTitleActionType = {
    type: TodolistsActionsType.ChangeTodoTitle
    id: string
    newTitle: string
}
export type ChangeTodoFilterActionType = {
    type: TodolistsActionsType.ChangeTodoFilter
    id: string
    filter: FilterValueType
}

export const removeTodolistAC = (todolistId: string): RemoveTodoActionType => {
    return {type: TodolistsActionsType.RemoveTodo, id: todolistId} as const
}
export const AddTodoAC = (newTitle: string, newTodolistId: string): AddTodoActionType => {
    return {type: TodolistsActionsType.AddTodo, title: newTitle, newTodolistId: newTodolistId} as const
}
export const ChangeTodoTitleAC = (newTitle: string, todolistId: string): ChangeTodoTitleActionType => {
    return {type: TodolistsActionsType.ChangeTodoTitle, id: todolistId, newTitle: newTitle} as const
}
export const ChangeTodoFilterAC = (filter: FilterValueType, todolistId: string,): ChangeTodoFilterActionType => {
    return {type: TodolistsActionsType.ChangeTodoFilter, id: todolistId, filter: filter} as const
}