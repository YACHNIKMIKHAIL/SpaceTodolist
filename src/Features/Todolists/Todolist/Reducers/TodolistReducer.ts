import {
    AddTodoActionType,
    ChangeTodoFilterActionType,
    ChangeTodoTitleActionType, GetTodolistsActionType,
    RemoveTodoActionType, TodolistsActionsType
} from "../Actions/TodolistsActions";
import {SpaceTodolistType} from "../../../../API/SpaceAPI";

export type FilterValueType = 'all' | 'active' | 'complited'

export type TodolitsType = SpaceTodolistType & { filter: FilterValueType }

export type SpaceTodolistsActionsType =
    RemoveTodoActionType
    | AddTodoActionType
    | ChangeTodoTitleActionType
    | ChangeTodoFilterActionType
    | GetTodolistsActionType

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
export const todolistReducer = (state = initialState, action: SpaceTodolistsActionsType): TodolitsType[] => {
        switch (action.type) {
            case TodolistsActionsType.RemoveTodo: {
                return state.filter(f => f.id !== action.id)
            }
            case TodolistsActionsType.AddTodo: {
                return [{...action.newTodolist, filter: 'all'}, ...state]
            }
            case TodolistsActionsType.ChangeTodoTitle: {
                return state.map(m => m.id === action.id ? {...m, title: action.newTitle} : m)
            }
            case TodolistsActionsType.ChangeTodoFilter: {
                return state.map(m => {
                    return m.id === action.id ? {...m, filter: action.filter} : m
                })
            }
            case TodolistsActionsType.GetTodolists: {
                return action.items.map(m => ({...m, filter: 'all'}))
            }
            default:
                return state
        }
    }
;
