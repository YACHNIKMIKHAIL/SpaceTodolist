import {
    todolist1,
    todolist2,
    todolist3,
    todolist4,
    todolist5,
    todolist6,
    todolist7,
    todolist8,
    todolist9
} from "./TasksReducer";

export type FilterValueType = 'all' | 'active' | 'complited'
export type TodolitsType = {
    id: string
    title: string
    filter: FilterValueType
}

type ActionsType = RemoveTodoActionType | AddTodoActionType | ChangeTodoTitleActionType | ChangeTodoFilterActionType

type RemoveTodoActionType = {
    type: 'REMOVE_TODO'
    id: string
}
type AddTodoActionType = {
    type: 'ADD_TODO'
    title: string
    newTodolistId: string
}
type ChangeTodoTitleActionType = {
    type: 'CHANGE_TODO_TITLE'
    id: string
    newTitle: string
}
type ChangeTodoFilterActionType = {
    type: 'CHANGE_TODO_FILTER'
    id: string
    filter: FilterValueType
}

const initialState: Array<TodolitsType> = [
    {id: todolist1, title: 'What to learn?', filter: 'all'},
    {id: todolist2, title: 'What to buy?', filter: 'all'},
    {id: todolist3, title: 'What to fixie?', filter: 'all'},
    {id: todolist4, title: 'C чего начать?', filter: 'all'},
    {id: todolist5, title: 'Куда сходить?', filter: 'all'},
    {id: todolist6, title: 'Что пить?', filter: 'all'},
    {id: todolist7, title: 'Как жить теперь?', filter: 'all'},
    {id: todolist8, title: 'Что позырить?', filter: 'all'},
    {id: todolist9, title: 'Что подарить?', filter: 'all'}
]
export const todolistReducer = (state = initialState, action: ActionsType): Array<TodolitsType> => {
        switch (action.type) {
            case 'REMOVE_TODO': {
                return state.filter(f => f.id !== action.id)
            }
            case 'ADD_TODO': {
                return [{
                    id: action.newTodolistId,
                    title: action.title,
                    filter: 'all'
                }, ...state]
            }
            case 'CHANGE_TODO_TITLE': {
                return state.map(m => m.id === action.id ? {...m, title: action.newTitle} : m)
            }
            case 'CHANGE_TODO_FILTER': {
                return state.map(m => {
                    return m.id === action.id ? {...m, filter: action.filter} : m
                })
            }
            default:
                return state
        }
    }
;
export const removeTodolistAC = (todolistId: string): RemoveTodoActionType => {
    return {type: 'REMOVE_TODO', id: todolistId} as const
}
export const AddTodoAC = (newTitle: string, newTodolistId: string): AddTodoActionType => {
    return {type: 'ADD_TODO', title: newTitle, newTodolistId: newTodolistId} as const
}
export const ChangeTodoTitleAC = (newTitle: string, todolistId: string): ChangeTodoTitleActionType => {
    return {type: 'CHANGE_TODO_TITLE', id: todolistId, newTitle: newTitle} as const
}
export const ChangeTodoFilterAC = (filter: FilterValueType, todolistId: string,): ChangeTodoFilterActionType => {
    return {type: 'CHANGE_TODO_FILTER', id: todolistId, filter: filter} as const
}