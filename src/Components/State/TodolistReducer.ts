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
            default:
                return state
        }
    }
;

