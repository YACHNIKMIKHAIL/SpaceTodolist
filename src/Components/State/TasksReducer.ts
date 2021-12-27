import {FilterValueType, TaskStateType, TaskType} from "../Todolist/Todolist";
import {v1} from "uuid";
import {todolist1,todolist2,todolist3,todolist4,todolist5,todolist6,todolist7,todolist8,todolist9} from './../../App'


const initialTasks:TaskStateType= {
    [todolist1]: [{id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}],
    [todolist2]: [{id: v1(), title: "Book", isDone: false},
        {id: v1(), title: "Milk", isDone: false},
        {id: v1(), title: "Bread", isDone: false}],
    [todolist3]: [{id: v1(), title: "Helmet", isDone: true},
        {id: v1(), title: "Wheels", isDone: false},
        {id: v1(), title: "Crank", isDone: false}],
    [todolist4]: [{id: v1(), title: "Тудулист", isDone: true},
        {id: v1(), title: "Нативочка", isDone: false},
        {id: v1(), title: "Чилл)))", isDone: false}],
    [todolist5]: [{id: v1(), title: "Домой вернуться", isDone: true},
        {id: v1(), title: "Игровая комната", isDone: true},
        {id: v1(), title: "В гости к маме)", isDone: false}],
    [todolist6]: [{id: v1(), title: "Чай", isDone: true},
        {id: v1(), title: "Чай", isDone: true},
        {id: v1(), title: "Чай", isDone: false}],
    [todolist7]: [{id: v1(), title: "по обс-вам(", isDone: false},
        {id: v1(), title: "Выжить любой ценой", isDone: false},
        {id: v1(), title: "Попытаться кайфануть)", isDone: true}],
    [todolist8]: [{id: v1(), title: "Мульты", isDone: true},
        {id: v1(), title: "Сны", isDone: true},
        {id: v1(), title: "Ничё", isDone: false}],
    [todolist9]: [{id: v1(), title: "Цветы", isDone: false},
        {id: v1(), title: "Цветы", isDone: false},
        {id: v1(), title: "Цветы)", isDone: true}]
}

export const tasksReducer = (state=initialTasks, action: ActionsType): TaskStateType => {
    switch (action.type) {
        case 'REMOVE_TASK': {
            return {...state, [action.todolistId]: state[action.todolistId].filter(f => f.id !== action.taskId)}
        }
        case 'CHANGE_TASK_STATUS': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(m => m.id === action.taskId ? {
                    ...m,
                    isDone: action.isDone
                } : m)
            }
        }
        case 'ADD_TASK': {
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        }
        case 'CHANGE_TASK_TITLE': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(m => m.id === action.taskId ? {
                    ...m,
                    title: action.title
                } : m)
            }
        }
        case 'ADD_NEW_TODO': {
            return {...state, [action.newTodolistId]: []}
        }

        default:
            return state
    }
}

type ActionsType = RemoveTaskActionType | changeTaskStatusAC | AddTaskActionType | changeTaskTitleType | addNewTodoType

type RemoveTaskActionType = ReturnType<typeof RemoveTaskAC>
export const RemoveTaskAC = (taskId: string, todolistId: string) => {
    return {type: 'REMOVE_TASK', taskId: taskId, todolistId: todolistId} as const
}

type changeTaskStatusAC = ReturnType<typeof ChangeTaskStatusAC>
export const ChangeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {type: 'CHANGE_TASK_STATUS', taskId: taskId, isDone: isDone, todolistId: todolistId} as const
}

type AddTaskActionType = ReturnType<typeof AddTaskAC>
export const AddTaskAC = (title: string, todolistId: string) => {
    return {type: 'ADD_TASK', title: title, todolistId: todolistId} as const
}

type changeTaskTitleType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
    return {type: 'CHANGE_TASK_TITLE', title: title, taskId: taskId, todolistId: todolistId} as const
}

type addNewTodoType = ReturnType<typeof addNewTodoAC>
export const addNewTodoAC = (newTodolistId: string) => {
    return {type: 'ADD_NEW_TODO', newTodolistId: newTodolistId} as const
}