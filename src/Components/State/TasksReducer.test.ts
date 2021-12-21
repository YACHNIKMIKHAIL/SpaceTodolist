import {v1} from "uuid";
import {TaskStateType} from "../Todolist/Todolist";
import {ChangeFilterAC, RemoveTaskAC, tasksReducer} from "./TasksReducer";

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

test('correct change task filter', () => {
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

    const endTasksState = tasksReducer(startTasksState, ChangeFilterAC(task3,todolist1,true))

    expect(endTasksState[todolist1].length).toBe(3)
    expect(endTasksState[todolist1]).toBe(true)
    expect(endTasksState[todolist1].find(f=>f.id===task2)).toBe(true)
})