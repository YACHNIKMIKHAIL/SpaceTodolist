import React, {useCallback, useEffect} from 'react';
import {TasksMap} from "../Map/TasksMap";
import {Button} from "../Button/Button";
import {AddForm} from "../AddForm/AddForm";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Grid} from "@mui/material";
import styled from "styled-components";
import {FilterValueType, TodolitsType} from "../State/TodolistReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../State/store";
import {ChangeTodoFilterAC, deleteTodolistsTC, updateTodolistsTC} from "../State/TodolistsActions";
import {createTaskTC, getTaskTC} from "../State/TasksActions";

type PropsType = {
    todolistID: string
}

export function TodolistMemo({
                                 todolistID,
                             }: PropsType) {

    const dispatch = useDispatch()
    const todolist = useSelector<rootReducerType, TodolitsType>(state => state.todolists.filter(f => f.id === todolistID)[0])

    useEffect(() => {
        dispatch(getTaskTC(todolistID))
    }, [])

    const changeFilter = useCallback((filter: FilterValueType, todolistID: string) => {
        dispatch(ChangeTodoFilterAC(filter, todolistID))
    }, [dispatch])
    const removeTodolist = useCallback((todolistID: string) => {
        dispatch(deleteTodolistsTC(todolistID))
    }, [dispatch])
    const onChangeTodolistTitle = useCallback((title: string) => {
        dispatch(updateTodolistsTC(todolistID, title))
    }, [dispatch, todolistID])

    const addTask = useCallback((title: string) => {
        dispatch(createTaskTC(todolistID, title))
    }, [dispatch, todolistID])

    const makeActive = useCallback((value: string) => {
        if (todolist.filter === value) {
            return 'active-filter'
        }
    }, [todolist.filter])


    return <Grid item>
        <OpacityCase>
            <h3 style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <EditableSpan title={todolist.title} onChange={onChangeTodolistTitle}/>
                <Button name={'x'} callback={() => removeTodolist(todolistID)}/>
            </h3>

            <AddForm addItem={addTask}/>

            <TasksMap
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