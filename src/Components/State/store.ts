import {applyMiddleware, combineReducers, createStore} from "redux";
import {SpaceTodolistsActionsType, todolistReducer} from "./TodolistReducer";
import {SpaceTasksActionsType, tasksReducer} from "./TasksReducer";
import thunk, {ThunkAction} from "redux-thunk";

export type rootReducerType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    todolists: todolistReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

type SpaceActionType = SpaceTasksActionsType | SpaceTodolistsActionsType
export type SpaceThunksType<ReturnType = void> = ThunkAction<ReturnType,
    rootReducerType,
    unknown,
    SpaceActionType>

