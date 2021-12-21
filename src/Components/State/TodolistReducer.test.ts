import {v1} from "uuid";
import {TodolitsType} from "../Todolist/Todolist";
import {todolistReducer} from "./TodolistReducer";

test('correct todolist remove', () => {
    let todolist1 = v1()
    let todolist2 = v1()

    const startState: Array<TodolitsType> = [
        {id: todolist1, title: 'What to learn?', filter: 'all'},
        {id: todolist2, title: 'What to buy?', filter: 'all'}
    ]

    const endState = todolistReducer(startState, {
        type: 'REMOVE_TODO', id: todolist1})

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolist2)
})

test('correct todolist add', () => {
    let todolist1 = v1()
    let todolist2 = v1()

    const startState: Array<TodolitsType> = [
        {id: todolist1, title: 'What to learn?', filter: 'all'},
        {id: todolist2, title: 'What to buy?', filter: 'all'}
    ]

    const endState = todolistReducer(startState, {
        type: 'ADD_TODO', newTitle: 'Restoran'})

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe('Restoran')
    expect(endState[2].filter).toBe('all')
})