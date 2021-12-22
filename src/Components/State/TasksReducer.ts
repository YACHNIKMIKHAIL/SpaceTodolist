import {FilterValueType, TaskStateType, TaskType} from "../Todolist/Todolist";
import {v1} from "uuid";

export const tasksReducer = (state:TaskStateType,action:ActionsType):TaskStateType => {
  switch (action.type){
      case 'REMOVE_TASK':{
         return {...state,[action.todolistId]:state[action.todolistId].filter(f=>f.id!==action.taskId)}
      }
      case 'CHANGE_TASK_STATUS':{
          return {...state,[action.todolistId]:state[action.todolistId].map(m=>m.id===action.taskId?{...m,isDone:action.isDone}:m)}
      }
      case 'ADD_TASK':{
          return {...state,[action.todolistId]:[{id: v1(), title: action.title, isDone: false},...state[action.todolistId]]}
      }
      case 'CHANGE_TASK_TITLE':{
          return {...state,[action.todolistId]:state[action.todolistId].map(m=>m.id===action.taskId?{...m,title:action.title}:m)}
      }

      default:
          return state
  }
}

type ActionsType=RemoveTaskActionType|ChangeFilterActionType|AddTaskActionType|changeTaskTitleType

type RemoveTaskActionType=ReturnType<typeof RemoveTaskAC>
export const RemoveTaskAC = (taskId:string,todolistId:string) => {
    return {type: 'REMOVE_TASK',taskId:taskId,todolistId:todolistId}as const
}

type ChangeFilterActionType=ReturnType<typeof ChangeStatusAC>
export const ChangeStatusAC = (taskId:string, todolistId:string, isDone:boolean) => {
    return {type: 'CHANGE_TASK_STATUS',taskId:taskId,todolistId:todolistId,isDone:isDone}as const
}

type AddTaskActionType=ReturnType<typeof AddTaskAC>
export const AddTaskAC = (title:string,todolistId:string) => {
  return {type:'ADD_TASK',title:title,todolistId:todolistId}as const
}

type changeTaskTitleType=ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (title:string,taskId:string,todolistId:string) => {
  return {type:'CHANGE_TASK_TITLE',title:title,taskId:taskId,todolistId:todolistId}
}