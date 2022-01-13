import React, {useCallback} from "react";
import {TaskType} from "../Todolist/Todolist";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Button} from "../Button/Button";
import {CheckboxX} from "../Checkbox/Checkbox";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {ChangeTaskStatusAC, changeTaskTitleAC, RemoveTaskAC} from "../State/TasksActions";
import {rootReducerType} from "../State/store";
import {TodolitsType} from "../State/TodolistReducer";


type TasksMapType = {
    id: string
    todolistID: string
}
export const TasksMapMemo = (props: TasksMapType) => {
    const dispatch = useDispatch()
    const todolist=useSelector<rootReducerType,TodolitsType>(state=>state.todolists.filter(f=>f.id===props.todolistID)[0])
    const tasksX = useSelector<rootReducerType, Array<TaskType>>(state => state.tasks[props.todolistID])

    const changeTaskStatus = useCallback((id: string, isDone: boolean) => {
        dispatch(ChangeTaskStatusAC(id, isDone, props.todolistID))
    }, [dispatch, props.todolistID])
    const changeTaskTitle = useCallback((title: string) => {
        dispatch(changeTaskTitleAC(props.id, title, props.todolistID))
    }, [dispatch, props.todolistID, props.id])
    const removeTask = useCallback((id: string) => {
        dispatch(RemoveTaskAC(id, props.todolistID))
    }, [dispatch, props.todolistID])


    let tasksForRender = tasksX
    if (todolist.filter === 'active') {
        tasksForRender = tasksX.filter(f => !f.isDone)
    }
    if (todolist.filter === 'complited') {
        tasksForRender = tasksX.filter(f => f.isDone)
    }
    return (
        <div>{
            tasksForRender.map(m => {
                    return <TaskCase opacity={m.isDone ? '0.4' : '1'}
                                     color={m.isDone ? 'rgba(109,4,234,0.77)' : 'rgba(28,16,0,0.8)'}
                                     key={m.id} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: 'center',
                    }}>
                        <CheckboxX isDone={m.isDone}
                                   callback={(e) => changeTaskStatus(m.id, e.currentTarget.checked)}/>
                        <EditableSpan title={m.title} onChange={changeTaskTitle}/>
                        <Button name={'x'} callback={() => removeTask(m.id)}/>
                    </TaskCase>
                }
            )
        }
        </div>
    )
}
export const TasksMap = React.memo(TasksMapMemo)
const TaskCase = styled.div<{ opacity: string, color: string }>`
  opacity: ${props => props.opacity};
  color: ${props => props.color};
`