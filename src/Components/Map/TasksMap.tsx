import React, {ChangeEvent} from "react";
import {TaskStateType, TaskType, TodolistMemo} from "../Todolist/Todolist";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Button} from "../Button/Button";
import {CheckboxX} from "../Checkbox/Checkbox";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {ChangeTaskStatusAC, changeTaskTitleAC, RemoveTaskAC} from "../State/TasksReducer";

type TasksMapType = {
    tasks: Array<TaskType>
    // changeCheckbox: (id: string, e: ChangeEvent<HTMLInputElement>, todolistID: string) => void
    // removeTaskX: (id: string) => void
    id: string
    // changeTaskTitle: (id: string, title: string, todolistId: string) => void
    todolistID: string
}
export const TasksMapMemo = (props: TasksMapType) => {
    const dispatch = useDispatch()
    // const tasks=useSelector<rootReducerType,Array<TaskType>>(state => state.tasks[props.todolistID])

    const changeTaskStatus = (id: string, isDone: boolean) => dispatch(ChangeTaskStatusAC(id, isDone, props.todolistID))
    const changeTaskTitle = (title: string) => dispatch(changeTaskTitleAC(props.id, title, props.todolistID))
    // const changeTaskTitle = (title: string) => props.changeTaskTitle(props.id, title, props.todolistID)
    // const changeTaskStatus = (id: string, e: ChangeEvent<HTMLInputElement>) => changeCheckbox(id, e, props.todolistID)

    const removeTask = (id: string) => dispatch(RemoveTaskAC(id, props.todolistID))


    return (
        <div>{
            props.tasks.map(m => {
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