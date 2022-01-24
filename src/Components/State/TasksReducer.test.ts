import {v1} from "uuid";
import {tasksReducer, TaskStateType} from "./TasksReducer";
import {addNewTodoAC, AddTaskAC, ChangeTaskStatusAC, changeTaskTitleAC, RemoveTaskAC} from "./TasksActions";


test('correct task remove', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()

    const startTasksState: TaskStateType = {
        [todolist1]: [{id: task1, title: "HTML&CSS", isDone: true},
            {id: task2, title: "JS", isDone: true},
            {id: task3, title: "ReactJS", isDone: false}],
        [todolist2]: [{id: task4, title: "Book", isDone: false},
            {id: task5, title: "Milk", isDone: false},
            {id: task6, title: "Bread", isDone: false}]
    }

    const endTasksState = tasksReducer(startTasksState, RemoveTaskAC(task5,todolist2))

    expect(endTasksState[todolist2].length).toBe(2)
    expect(endTasksState[todolist2].find(f=>f.title==="Milk")).toBe(undefined)
})

test('correct change task status', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()

    const startTasksState: TaskStateType = {
        [todolist1]: [{id: task1, title: "HTML&CSS", isDone: true},
            {id: task2, title: "JS", isDone: true},
            {id: task3, title: "ReactJS", isDone: false}],
        [todolist2]: [{id: task4, title: "Book", isDone: false},
            {id: task5, title: "Milk", isDone: false},
            {id: task6, title: "Bread", isDone: false}]
    }

    const endTasksState = tasksReducer(startTasksState, ChangeTaskStatusAC(task3,true,todolist1))

    expect(endTasksState[todolist1].length).toBe(3)
    expect(endTasksState[todolist1][1].isDone).toBe(true)
    expect(endTasksState[todolist1][2].isDone).toBe(true)
})

test('correct add task', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()

    const startTasksState: TaskStateType = {
        [todolist1]: [{id: task1, title: "HTML&CSS", isDone: true},
            {id: task2, title: "JS", isDone: true},
            {id: task3, title: "ReactJS", isDone: false}],
        [todolist2]: [{id: task4, title: "Book", isDone: false},
            {id: task5, title: "Milk", isDone: false},
            {id: task6, title: "Bread", isDone: false}]
    }

    const endTasksState = tasksReducer(startTasksState, AddTaskAC('New Task',todolist1))

    expect(endTasksState[todolist1].length).toBe(4)
    expect(endTasksState[todolist1][0].title).toBe('New Task')
})

test('correct change task title', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()

    const startTasksState: TaskStateType = {
        [todolist1]: [{id: task1, title: "HTML&CSS", isDone: true},
            {id: task2, title: "JS", isDone: true},
            {id: task3, title: "ReactJS", isDone: false}],
        [todolist2]: [{id: task4, title: "Book", isDone: false},
            {id: task5, title: "Milk", isDone: false},
            {id: task6, title: "Bread", isDone: false}]
    }

    const endTasksState = tasksReducer(startTasksState, changeTaskTitleAC('Ravasfjdv',task6,todolist2))

    expect(endTasksState[todolist2].length).toBe(3)
    expect(endTasksState[todolist2][2].title).toBe('Ravasfjdv')
    expect(endTasksState[todolist2][2].isDone).toBe(false)
})

test('correct add task list', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let newTodolistId = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()

    const startTasksState: TaskStateType = {
        [todolist1]: [{id: task1, title: "HTML&CSS", isDone: true},
            {id: task2, title: "JS", isDone: true},
            {id: task3, title: "ReactJS", isDone: false}],
        [todolist2]: [{id: task4, title: "Book", isDone: false},
            {id: task5, title: "Milk", isDone: false},
            {id: task6, title: "Bread", isDone: false}]
    }

    const endTasksState = tasksReducer(startTasksState, addNewTodoAC(newTodolistId))

    expect(endTasksState[newTodolistId].length).toBe(0)
})