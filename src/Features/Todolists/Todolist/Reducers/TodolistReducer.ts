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

const initialState: Array<TodolitsType> = []
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
