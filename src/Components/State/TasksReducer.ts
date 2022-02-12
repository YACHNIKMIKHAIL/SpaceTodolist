import {v1} from "uuid";
import {
    AddTaskActionType,
    changeTasksFilterType,
    changeTaskStatusAC,
    getTasksType,
    RemoveTaskActionType,
    TasksActionsType
} from "./TasksActions";
import {
    AddTodoActionType,
    GetTodolistsActionType,
    RemoveTodoActionType,
    TodolistsActionsType
} from "./TodolistsActions";
import {SpaceTaskType} from "../../API/SpaceAPI";

export const todolist1 = v1()
export const todolist2 = v1()
export const todolist3 = v1()
export const todolist4 = v1()
export const todolist5 = v1()
export const todolist6 = v1()
export const todolist7 = v1()
export const todolist8 = v1()
export const todolist9 = v1()

export type TaskStateType = {
    [key: string]: Array<SpaceTaskType>
}
const initialTasks: TaskStateType = {
    // [todolist1]: [{id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false}],
    // [todolist2]: [{id: v1(), title: "Book", isDone: false},
    //     {id: v1(), title: "Milk", isDone: false},
    //     {id: v1(), title: "Bread", isDone: false}],
    // [todolist3]: [{id: v1(), title: "Helmet", isDone: true},
    //     {id: v1(), title: "Wheels", isDone: false},
    //     {id: v1(), title: "Crank", isDone: false}],
    // [todolist4]: [{id: v1(), title: "Тудулист", isDone: true},
    //     {id: v1(), title: "Нативочка", isDone: false},
    //     {id: v1(), title: "Чилл)))", isDone: false}],
    // [todolist5]: [{id: v1(), title: "Домой вернуться", isDone: true},
    //     {id: v1(), title: "Игровая комната", isDone: true},
    //     {id: v1(), title: "В гости к маме)", isDone: false}],
    // [todolist6]: [{id: v1(), title: "Чай", isDone: true},
    //     {id: v1(), title: "Чай", isDone: true},
    //     {id: v1(), title: "Чай", isDone: false}],
    // [todolist7]: [{id: v1(), title: "по обс-вам(", isDone: false},
    //     {id: v1(), title: "Выжить любой ценой", isDone: false},
    //     {id: v1(), title: "Попытаться кайфануть)", isDone: true}],
    // [todolist8]: [{id: v1(), title: "Мульты", isDone: true},
    //     {id: v1(), title: "Сны", isDone: true},
    //     {id: v1(), title: "Ничё", isDone: false}],
    // [todolist9]: [{id: v1(), title: "Цветы", isDone: false},
    //     {id: v1(), title: "Цветы", isDone: false},
    //     {id: v1(), title: "Цветы)", isDone: true}]
}

export const tasksReducer = (state = initialTasks, action: SpaceTasksActionsType): TaskStateType => {
    switch (action.type) {
        case TasksActionsType.RemoveTask: {
            return {...state, [action.todolistId]: state[action.todolistId].filter(f => f.id !== action.taskId)}
        }
        case TasksActionsType.ChangeTaskStatus: {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(m => m.id === action.taskId ? {
                    ...m, ...action.item
                } : m)
            }
        }
        case TasksActionsType.AddTask: {
            return {
                ...state,
                [action.todolistId]: [{...action.newTask}, ...state[action.todolistId]]
            }
        }
        case TodolistsActionsType.AddTodo: {
            return {...state, [action.newTodolist.id]: []}
        }
        case TodolistsActionsType.GetTodolists: {
            const space = {...state}
            action.items.forEach(sp => space[sp.id] = [])
            return space
        }
        case TodolistsActionsType.RemoveTodo: {
            let spaceCopy = {...state}
            delete spaceCopy[action.id]
            return spaceCopy
        }
        case TasksActionsType.getSpaceTasks: {
            return {...state, [action.todolistId]: action.items.map(m => ({...m}))}
        }
        default:
            return state
    }
}

export type SpaceTasksActionsType =
    RemoveTaskActionType
    | changeTaskStatusAC
    | AddTaskActionType
    | AddTodoActionType
    | changeTasksFilterType
    | GetTodolistsActionType
    | RemoveTodoActionType
    | getTasksType