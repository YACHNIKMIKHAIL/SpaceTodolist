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
      case 'ADD_NEW_TODO':{
          return {...state,[action.newTodolistId]:[]}
      }

      default:
          return state
  }
}

type ActionsType=RemoveTaskActionType|changeTaskStatusAC|AddTaskActionType|changeTaskTitleType|addNewTodoType

type RemoveTaskActionType=ReturnType<typeof RemoveTaskAC>
export const RemoveTaskAC = (taskId:string,todolistId:string) => {
    return {type: 'REMOVE_TASK',taskId:taskId,todolistId:todolistId}as const
}

type changeTaskStatusAC =ReturnType<typeof ChangeTaskStatusAC>
export const ChangeTaskStatusAC = (taskId:string, isDone:boolean , todolistId:string) => {
    return {type: 'CHANGE_TASK_STATUS',taskId:taskId,isDone:isDone,todolistId:todolistId}as const
}

type AddTaskActionType=ReturnType<typeof AddTaskAC>
export const AddTaskAC = (title:string,todolistId:string) => {
  return {type:'ADD_TASK',title:title,todolistId:todolistId}as const
}

type changeTaskTitleType=ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (taskId:string,title:string,todolistId:string) => {
  return {type:'CHANGE_TASK_TITLE',title:title,taskId:taskId,todolistId:todolistId}as const
}

type addNewTodoType=ReturnType<typeof addNewTodoAC>
export const addNewTodoAC=(newTodolistId:string)=>{
    return {type:'ADD_NEW_TODO',newTodolistId:newTodolistId}as const
}