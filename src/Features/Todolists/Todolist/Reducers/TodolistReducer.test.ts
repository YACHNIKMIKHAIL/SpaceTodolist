import {v1} from "uuid";
import {todolistReducer, TodolitsType} from "./TodolistReducer";
import {
    AddTodoAC,
    ChangeTodoFilterAC,
    changeTodolistsStatusAC,
    ChangeTodoTitleAC,
    removeTodolistAC
} from "../Actions/TodolistsActions";


test('correct todolist remove', () => {
    let todolist1 = v1()
    let todolist2 = v1()

    const startState: Array<TodolitsType> = [
        {id: todolist1, title: 'What to learn?', filter: 'all', addedDate: '', order: 0},
        {id: todolist2, title: 'What to buy?', filter: 'all', addedDate: '', order: 0}
    ]

    const endState = todolistReducer(startState, removeTodolistAC(todolist1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolist2)
})

test('correct todolist add', () => {
    let todolist1 = v1()
    let todolist2 = v1()

    const startState: Array<TodolitsType> = [
        {id: todolist1, title: 'What to learn?', filter: 'all', addedDate: '', order: 0},
        {id: todolist2, title: 'What to buy?', filter: 'all', addedDate: '', order: 0}
    ]

    const endState = todolistReducer(startState, AddTodoAC( {id: 'todolist3', title: 'Restoran', addedDate: '', order: 0}))

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe('Restoran')
    expect(endState[2].filter).toBe('all')
})

test('correct change todolist title', () => {
    let todolist1 = v1()
    let todolist2 = v1()

    const startState: Array<TodolitsType> = [
        {id: todolist1, title: 'What to learn?', filter: 'all', addedDate: '', order: 0},
        {id: todolist2, title: 'What to buy?', filter: 'all', addedDate: '', order: 0}
    ]

    const endState = todolistReducer(startState, ChangeTodoTitleAC(todolist2, 'Changes')
    )

    expect(endState.length).toBe(2)
    expect(endState[1].title).toBe('Changes')
    expect(endState[0].title).toBe('What to learn?')
})

test('correct change todolist filter', () => {
    let todolist1 = v1()
    let todolist2 = v1()

    const startState: Array<TodolitsType> = [
        {id: todolist1, title: 'What to learn?', filter: 'all', addedDate: '', order: 0},
        {id: todolist2, title: 'What to buy?', filter: 'all', addedDate: '', order: 0}
    ]

    const endState = todolistReducer(startState, ChangeTodoFilterAC('complited', todolist2)
    )

    expect(endState.length).toBe(2)
    expect(endState[1].filter).toBe('complited')
    expect(endState[0].title).toBe('What to learn?')
})
test('correct change todolist status', () => {
    let todolist1 = v1()
    let todolist2 = v1()

    const startState: Array<TodolitsType> = [
        {id: todolist1, title: 'What to learn?', filter: 'all', addedDate: '', order: 0,entitySpaceStatus:'idle'},
        {id: todolist2, title: 'What to buy?', filter: 'all', addedDate: '', order: 0,entitySpaceStatus:'idle'}
    ]

    const endState = todolistReducer(startState, changeTodolistsStatusAC(todolist2,'loading' )
    )

    expect(endState.length).toBe(2)
    expect(endState[1].entitySpaceStatus).toBe('loading')
    expect(endState[0].title).toBe('What to learn?')
})