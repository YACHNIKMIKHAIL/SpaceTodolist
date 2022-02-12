import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTaskTC, updateTaskTC} from "./Todolist/Actions/TasksActions";
import {rootReducerType} from "../../App/store";
import {TodolitsType} from "./Todolist/Reducers/TodolistReducer";
import Task from "./Todolist/Task/Task";
import {SpaceTaskType, TaskStatuses} from "../../API/SpaceAPI";


type TasksMapType = {
    todolistID: string
}
export const TasksMapMemo = (props: TasksMapType) => {
    const dispatch = useDispatch()
    const todolist = useSelector<rootReducerType, TodolitsType>(state => state.todolists.filter(f => f.id === props.todolistID)[0])
    const tasksX = useSelector<rootReducerType, Array<SpaceTaskType>>(state => state.tasks[props.todolistID])
    const changeTaskStatus = useCallback((id: string, taskTitle: string, e: boolean) => {
        const changes = e ? {status: TaskStatuses.Complited} : {status: TaskStatuses.New}
        dispatch(updateTaskTC(props.todolistID, id, changes))
    }, [dispatch, props.todolistID])
    const changeTaskTitle = useCallback((id: string, title: string) => {
        dispatch(updateTaskTC(props.todolistID, id, {title}))
    }, [dispatch, props.todolistID])
    const removeTask = useCallback((id: string) => {
        dispatch(deleteTaskTC(props.todolistID, id))
    }, [dispatch, props.todolistID])


    let tasksForRender = tasksX
    if (todolist.filter === 'active') {
        tasksForRender = tasksX.filter(f => f.status === 0)
    }
    if (todolist.filter === 'complited') {
        tasksForRender = tasksX.filter(f => f.status === 2)
    }
    return (
        <div>{
            tasksForRender.map(m => {
                    return <Task key={m.id}
                                 status={m.status}
                                 id={m.id}
                                 title={m.title}
                                 changeTaskStatus={changeTaskStatus}
                                 changeTaskTitle={changeTaskTitle}
                                 removeTask={removeTask}/>
                }
            )
        }
        </div>
    )
}
export const TasksMap = React.memo(TasksMapMemo)
