import {TaskStateType, TaskType} from "../Todolist/Todolist";

type ActionsType=RemoveTaskActionType
type RemoveTaskActionType={
    type:'REMOVE_TASK'
    taskId:string
    todolistId:string
}
export const tasksReducer = (state:TaskStateType,action:ActionsType):TaskStateType => {
  switch (action.type){
      case 'REMOVE_TASK':{
         return {...state,[action.todolistId]:state[action.todolistId].filter(f=>f.id!==action.taskId)}
          // return state.map(m=>m.id===action.todolistId? {...state,[action.todolistId]:[m[action.todolistId]].filter(f=>f.id!==action.taskId)}:m)
      }
      default:
          return state
  }
}