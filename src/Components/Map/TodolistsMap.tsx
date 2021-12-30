import {FilterValueType, TaskStateType, Todolist, TodolitsType} from "../Todolist/Todolist";
import React from "react";
import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";


type TodolistsMapType = {
    // todolists: Array<TodolitsType>
    // removeTask: (id: string, todolistID: string) => void
    // changeFilter: (filter: FilterValueType, todolistID: string) => void
    // addTask: (title: string, todolistID: string) => void
    // changeTaskStatus: (id: string, isDone: boolean, todolistID: string) => void
    // removeTodolist: (todolistID: string) => void
    // changeTaskTitle: (id: string, title: string, todolistId: string) => void
    // onChangeTodolistTitle: (title: string, todolistId: string) => void
}
export const TodolistsMapMemo = ({
                                     // removeTask,
                                     // changeFilter,
                                     // addTask,
                                     // changeTaskStatus,
                                     // removeTodolist,
                                     ...props
                                 }: TodolistsMapType) => {
    const tasks = useSelector<rootReducerType, TaskStateType>(state => state.tasks)
    const todolists = useSelector<rootReducerType, Array<TodolitsType>>(state => state.todolists)

    return <> {todolists.map(todo => {
        let tasksForRender = tasks[todo.id]
        if (todo.filter === 'active') {
            tasksForRender = tasks[todo.id].filter(f => !f.isDone)
        }
        if (todo.filter === 'complited') {
            tasksForRender = tasks[todo.id].filter(f => f.isDone)
        }
        return <Todolist key={todo.id}
                         todolistID={todo.id}
                         title={todo.title}
                         tasks={tasksForRender}
                         // removeTask={removeTask}
            // changeFilter={changeFilter}
            //              addTask={addTask}
                         // changeTaskStatus={changeTaskStatus}
                         filter={todo.filter}
                         // removeTodolist={removeTodolist}
                         // changeTaskTitle={props.changeTaskTitle}
                         // onChangeTodolistTitle={props.onChangeTodolistTitle}
        />
    })}
    </>
}
export const TodolistsMap = React.memo(TodolistsMapMemo)