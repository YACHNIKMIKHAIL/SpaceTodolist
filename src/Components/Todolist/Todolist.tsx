import React, {useCallback} from 'react';
import {TasksMap} from "../Map/TasksMap";
import {Button} from "../Button/Button";
import {AddForm} from "../AddForm/AddForm";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Grid} from "@mui/material";
import styled from "styled-components";
import { FilterValueType} from "../State/TodolistReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {ChangeTodoFilterAC, ChangeTodoTitleAC, removeTodolistAC} from "../State/TodolistsActions";
import {AddTaskAC} from "../State/TasksActions";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    filter: FilterValueType
    todolistID: string
}

export function TodolistMemo({
                                 todolistID,
                                 filter,
                                 ...props
                             }: PropsType) {

    const dispatch = useDispatch()
    const tasksX = useSelector<rootReducerType, Array<TaskType>>(state => state.tasks[todolistID])

    const changeFilter = useCallback((filter: FilterValueType, todolistID: string) => {
        dispatch(ChangeTodoFilterAC(filter, todolistID))
    }, [dispatch])
    const removeTodolist = useCallback((todolistID: string) => {
        dispatch(removeTodolistAC(todolistID))
    }, [dispatch])
    const onChangeTodolistTitle = useCallback((title: string) => {
        dispatch(ChangeTodoTitleAC(title, todolistID))
    }, [dispatch, todolistID])

    const addTask = useCallback((title: string) => {
        console.log('addTask WORK')
        dispatch(AddTaskAC(title, todolistID))
    }, [dispatch, todolistID])

    console.log(`render ${todolistID}`)
    const makeActive = useCallback((value: string) => {
       if (filter === value) {
          return 'active-filter'
       }
    },[filter])

    let tasksForRender = tasksX
    if (filter === 'active') {
        tasksForRender = tasksX.filter(f => !f.isDone)
    }
    if (filter === 'complited') {
        tasksForRender = tasksX.filter(f => f.isDone)
    }
    return <Grid item>
        <OpacityCase>
            <h3 style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <EditableSpan title={props.title} onChange={onChangeTodolistTitle}/>
                <Button name={'x'} callback={() => removeTodolist(todolistID)}/>
            </h3>

            <AddForm addItem={addTask}/>

            <TasksMap
                tasks={tasksForRender}
                id={todolistID}
                todolistID={todolistID}/>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Button name={'All'} callback={() => changeFilter('all', todolistID)}
                        className={makeActive('all')}/>
                <Button name={'Active'} callback={() => changeFilter('active', todolistID)}
                        className={makeActive('active')}/>
                <Button name={'Complited'} callback={() => changeFilter('complited', todolistID)}
                        className={makeActive('complited')}/>
            </div>
        </OpacityCase>
    </Grid>
}

export const Todolist = React.memo(TodolistMemo)


const OpacityCase = styled.div`
  background: rgba(203, 209, 213, 0.7);
  padding: 15px;
  border-radius: 10px;
`