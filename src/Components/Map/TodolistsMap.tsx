import {FilterValueType, TaskStateType, TaskType, Todolist, TodolitsType} from "../Todolist/Todolist";
import React from "react";


type TodolistsMapType = {
    todolists: Array<TodolitsType>
    tasks: TaskStateType
    // id: string
    // title: string
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (filter: FilterValueType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistID: string) => void
    removeTodolist: (todolistID: string) => void
    // todolistID: string
}
export const TodolistsMap = (props: TodolistsMapType) => {
    return (
        <div className="App">
            {props.todolists.map(todo => {
                let tasksForRender = props.tasks[todo.id]
                if (todo.filter === 'active') {
                    tasksForRender = props.tasks[todo.id].filter(f => !f.isDone)
                }
                if (todo.filter === 'complited') {
                    tasksForRender = props.tasks[todo.id].filter(f => f.isDone)
                }
                return <Todolist key={todo.id}
                                 todolistID={todo.id}
                                 title={todo.title}
                                 tasks={tasksForRender}
                                 removeTask={props.removeTask}
                                 changeFilter={props.changeFilter}
                                 addTask={props.addTask}
                                 changeTaskStatus={props.changeTaskStatus}
                                 filter={todo.filter}
                                 removeTodolist={props.removeTodolist}/>
            })}
        </div>
    );
}