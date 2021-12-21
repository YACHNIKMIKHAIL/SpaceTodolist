import {TodolitsType} from "../Todolist/Todolist";

type ActionType = {
    type: string
    [key: string]: any
}

export const todolistReducer = (state: Array<TodolitsType>, action: ActionType): Array<TodolitsType> => {
        switch (action.type) {
            case 'REMOVE_TODO': {
                return state.filter(f => f.id !== action.id)
            }
            default:
                return state
        }
    }
;

