import {combineReducers, createStore} from "redux";
import {todolistReducer} from "./TodolistReducer";
import {tasksReducer} from "./TasksReducer";

export type rootReducerType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    todolists: todolistReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer)

