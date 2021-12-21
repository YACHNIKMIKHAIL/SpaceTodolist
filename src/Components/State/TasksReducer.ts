import {FilterValueType, TaskStateType, TaskType} from "../Todolist/Todolist";

type ActionsType=RemoveTaskActionType|ChangeFilterActionType
type RemoveTaskActionType={
    type:'REMOVE_TASK'
    taskId:string
    todolistId:string
}
type ChangeFilterActionType={
    type:'CHANGE_TASK_STATUS'
    taskId:string
    todolistId:string
    isDone:boolean
}
export const tasksReducer = (state:TaskStateType,action:ActionsType):TaskStateType => {
  switch (action.type){
      case 'REMOVE_TASK':{
         return {...state,[action.todolistId]:state[action.todolistId].filter(f=>f.id!==action.taskId)}
      }
      case 'CHANGE_TASK_STATUS':{
          return {...state,[action.todolistId]:state[action.todolistId].map(m=>m.id===action.taskId?{...m,isDone:action.isDone}:m)}
      }
      default:
          return state
  }
}
export const RemoveTaskAC = (taskId:string,todolistId:string):RemoveTaskActionType => {
    return {type: 'REMOVE_TASK',taskId:taskId,todolistId:todolistId}as const
}
export const ChangeStatusAC = (taskId:string, todolistId:string, isDone:boolean):ChangeFilterActionType => {
    return {type: 'CHANGE_TASK_STATUS',taskId:taskId,todolistId:todolistId,isDone:isDone}as const
}