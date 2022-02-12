import {applyMiddleware, combineReducers, createStore} from "redux";
import {SpaceTodolistsActionsType, todolistReducer} from "../Features/Todolists/Todolist/Reducers/TodolistReducer";
import {SpaceTasksActionsType, tasksReducer} from "../Features/Todolists/Todolist/Reducers/TasksReducer";
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
