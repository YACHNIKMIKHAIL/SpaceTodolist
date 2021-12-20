import React, {ChangeEvent} from 'react';
import {TasksMap} from "../Map/TasksMap";
import {Button} from "../Button/Button";
import {AddForm} from "../AddForm/AddForm";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Grid, Paper} from "@mui/material";
import styled from "styled-components";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValueType = 'all' | 'active' | 'complited'
export type TodolitsType = {
    id: string
    title: string
    filter: FilterValueType
}
export type TaskStateType = {
    [key: string]: Array<TaskType>
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (filter: FilterValueType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistID: string) => void
    filter: FilterValueType
    todolistID: string
    removeTodolist: (todolistID: string) => void
    changeTaskTitle: (id: string, title: string, todolistId: string) => void
    onChangeTodolistTitle: (title: string, todolistId: string) => void
}

export function Todolist({
                             removeTask,
                             changeFilter,
                             addTask,
                             changeTaskStatus,
                             removeTodolist,
                             todolistID,
                             filter,
                             ...props
                         }: PropsType) {

    const changeTasksFiler = (value: FilterValueType, todolistID: string) => changeFilter(value, todolistID)
    const removeTaskX = (id: string) => removeTask(id, todolistID)
    const changeCheckbox = (id: string, e: ChangeEvent<HTMLInputElement>, todolistID: string) => changeTaskStatus(id, e.currentTarget.checked, todolistID)
    const removeTodolistX = () => removeTodolist(todolistID)
    const makeActive = (value: string) => filter === value ? 'active-filter' : ''
    const addTaskX = (title: string) => addTask(title, todolistID)
    const onChangeTodolistTitle = (title: string) => props.onChangeTodolistTitle(todolistID, title)

    return <Grid item>
        {/*<Paper style={{padding: '10px'}}>*/}
            <OpacityCase >
                <h3 style={{display: 'flex', flexDirection: 'row',justifyContent:'space-between'}}>
                    <EditableSpan title={props.title} onChange={onChangeTodolistTitle}/>
                    <Button name={'x'} callback={removeTodolistX}/>
                </h3>

                <AddForm addItem={addTaskX}/>

                <TasksMap tasks={props.tasks}
                          changeCheckbox={changeCheckbox}
                          removeTaskX={removeTaskX}
                          id={todolistID}
                          changeTaskTitle={props.changeTaskTitle}
                          todolistID={todolistID}/>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Button name={'All'} callback={() => changeTasksFiler('all', todolistID)}
                            className={makeActive('all')}/>
                    <Button name={'Active'} callback={() => changeTasksFiler('active', todolistID)}
                            className={makeActive('active')}/>
                    <Button name={'Complited'} callback={() => changeTasksFiler('complited', todolistID)}
                            className={makeActive('complited')}/>
                </div>
            </OpacityCase>
        {/*</Paper>*/}
    </Grid>
}

const OpacityCase = styled.div`
  background: rgba(97, 133, 165, 0.5);
  padding: 15px;
  border-radius: 10px;
`