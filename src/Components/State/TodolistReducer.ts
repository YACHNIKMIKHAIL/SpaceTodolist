import {TodolitsType} from "../Todolist/Todolist";
import {v1} from "uuid";

type ActionType = {
    type: string
    [key: string]: any
}

export const todolistReducer = (state: Array<TodolitsType>, action: ActionType): Array<TodolitsType> => {
        switch (action.type) {
            case 'REMOVE_TODO': {
                return state.filter(f => f.id !== action.id)
            }
            case 'ADD_TODO': {
                return [...state, {
                    id: v1(),
                    title: action.newTitle,
                    filter: 'all'
                }]
            }
            case 'CHANGE_TODO_TITLE': {
                return state.map(m=>m.id===action.id?{...m,title:action.newTitle}:m)
            }
            case 'CHANGE_TODO_FILTER': {
                return state.map(m=>m.id===action.id?{...m,filter:action.filter}:m)
            }
            default:
                return state
        }
    }
;

