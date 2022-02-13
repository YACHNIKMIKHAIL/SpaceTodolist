import {FilterValueType} from "../Reducers/TodolistReducer";
import {SpaceTodolistType, todolistsSpaceApi} from "../../../../API/SpaceAPI";
import {SpaceThunksType} from "../../../../App/store";
import {RequestStatusType, setAppStatusAC} from "../../../../App/AppReducer";

export enum TodolistsActionsType {
    RemoveTodo = 'REMOVE_TODO',
    AddTodo = 'ADD_TODO',
    ChangeTodoTitle = 'CHANGE_TODO_TITLE',
    ChangeTodoFilter = 'CHANGE_TODO_FILTER',
    GetTodolists = 'GetTodolists',
    ChangeTodolistEntityStatus = 'ChangeTodolistEntityStatus'
}

export type RemoveTodoActionType = {
    type: TodolistsActionsType.RemoveTodo
    id: string
}
export type AddTodoActionType = {
    type: TodolistsActionsType.AddTodo
    newTodolist: SpaceTodolistType
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
export type GetTodolistsActionType = {
    type: TodolistsActionsType.GetTodolists
    items: Array<SpaceTodolistType>
}
export type ChangeTodolistsEntityStatusActionType = {
    type: TodolistsActionsType.ChangeTodolistEntityStatus
    status: RequestStatusType
    todolistId: string
}

export const removeTodolistAC = (todolistId: string): RemoveTodoActionType => {
    return {type: TodolistsActionsType.RemoveTodo, id: todolistId} as const
}
export const AddTodoAC = (newTodolist: SpaceTodolistType): AddTodoActionType => {
    return {type: TodolistsActionsType.AddTodo, newTodolist} as const
}
export const ChangeTodoTitleAC = (todolistId: string, newTitle: string): ChangeTodoTitleActionType => {
    return {type: TodolistsActionsType.ChangeTodoTitle, id: todolistId, newTitle: newTitle} as const
}
export const ChangeTodoFilterAC = (filter: FilterValueType, todolistId: string,): ChangeTodoFilterActionType => {
    return {type: TodolistsActionsType.ChangeTodoFilter, id: todolistId, filter: filter} as const
}
export const GetTodolistsAC = (items: Array<SpaceTodolistType>): GetTodolistsActionType => {
    return {type: TodolistsActionsType.GetTodolists, items} as const
}
export const changeTodolistsStatusAC = (todolistId: string, status: RequestStatusType): ChangeTodolistsEntityStatusActionType => {
    return {type: TodolistsActionsType.ChangeTodolistEntityStatus, todolistId, status} as const
}

export const getTodolistsTC = (): SpaceThunksType => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        let space = await todolistsSpaceApi.getTodolists()
        dispatch(GetTodolistsAC(space.data))
        dispatch(setAppStatusAC('succesed'))
    } catch (e) {
        console.log(e)
    }
}
export const createTodolistsTC = (title: string): SpaceThunksType => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        let space = await todolistsSpaceApi.createTodolist(title)
        dispatch(AddTodoAC(space.data.data.item))
        dispatch(setAppStatusAC('succesed'))
    } catch (e) {
        console.log(e)
    }
}
export const deleteTodolistsTC = (todolistId: string): SpaceThunksType => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    dispatch(changeTodolistsStatusAC(todolistId, 'loading'))
    try {
        await todolistsSpaceApi.deleteTodolist(todolistId)
        dispatch(removeTodolistAC(todolistId))
        dispatch(setAppStatusAC('succesed'))
    } catch (e) {
        console.log(e)
    }
}
export const updateTodolistsTC = (todolistId: string, title: string): SpaceThunksType => async (dispatch) => {
    try {
        await todolistsSpaceApi.updateTodolist(todolistId, title)
        dispatch(ChangeTodoTitleAC(todolistId, title))
    } catch (e) {
        console.log(e)
    }
}