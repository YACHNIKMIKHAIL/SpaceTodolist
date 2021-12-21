import {FilterValueType, TodolitsType} from "../Todolist/Todolist";
import {v1} from "uuid";

type ActionsType = RemoveTodoActionType|AddTodoActionType|ChangeTodoTitleActionType|ChangeTodoFilterActionType

type RemoveTodoActionType={
    type: 'REMOVE_TODO'
    id:string
}
type AddTodoActionType={
    type: 'ADD_TODO'
    newTitle: string
}
type ChangeTodoTitleActionType={
    type: 'CHANGE_TODO_TITLE'
    id:string
    newTitle:string
}
type ChangeTodoFilterActionType={
    type: 'CHANGE_TODO_FILTER'
    id:string
    filter:FilterValueType
}
export const todolistReducer = (state: Array<TodolitsType>, action: ActionsType): Array<TodolitsType> => {
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
export const removeTodolistAC = (todolistId:string):RemoveTodoActionType => {
  return {type: 'REMOVE_TODO',id:todolistId}
}