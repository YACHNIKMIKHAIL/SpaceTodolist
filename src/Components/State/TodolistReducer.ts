import {
    AddTodoActionType,
    ChangeTodoFilterActionType,
    ChangeTodoTitleActionType,
    RemoveTodoActionType, TodolistsActionsType
} from "./TodolistsActions";

export type FilterValueType = 'all' | 'active' | 'complited'
export type TodolitsType = {
    id: string
    title: string
    filter: FilterValueType
}

type ActionsType = RemoveTodoActionType | AddTodoActionType | ChangeTodoTitleActionType | ChangeTodoFilterActionType

const initialState: Array<TodolitsType> = [
    // {id: todolist1, title: 'What to learn?', filter: 'all'},
    // {id: todolist2, title: 'What to buy?', filter: 'all'},
    // {id: todolist3, title: 'What to fixie?', filter: 'all'},
    // {id: todolist4, title: 'C чего начать?', filter: 'all'},
    // {id: todolist5, title: 'Куда сходить?', filter: 'all'},
    // {id: todolist6, title: 'Что пить?', filter: 'all'},
    // {id: todolist7, title: 'Как жить теперь?', filter: 'all'},
    // {id: todolist8, title: 'Что позырить?', filter: 'all'},
    // {id: todolist9, title: 'Что подарить?', filter: 'all'}
]
export const todolistReducer = (state = initialState, action: ActionsType): Array<TodolitsType> => {
        switch (action.type) {
            case TodolistsActionsType.RemoveTodo: {
                return state.filter(f => f.id !== action.id)
            }
            case TodolistsActionsType.AddTodo: {
                return [{
                    id: action.newTodolistId,
                    title: action.title,
                    filter: 'all'
                }, ...state]
            }
            case TodolistsActionsType.ChangeTodoTitle: {
                return state.map(m => m.id === action.id ? {...m, title: action.newTitle} : m)
            }
            case TodolistsActionsType.ChangeTodoFilter: {
                return state.map(m => {
                    return m.id === action.id ? {...m, filter: action.filter} : m
                })
            }
            default:
                return state
        }
    }
;
