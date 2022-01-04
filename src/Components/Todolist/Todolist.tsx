import React, {useCallback} from 'react';
import {TasksMap} from "../Map/TasksMap";
import {Button} from "../Button/Button";
import {AddForm} from "../AddForm/AddForm";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Grid} from "@mui/material";
import styled from "styled-components";
import {ChangeTodoFilterAC, ChangeTodoTitleAC, removeTodolistAC} from "../State/TodolistReducer";
import {useDispatch} from "react-redux";
import {AddTaskAC} from "../State/TasksReducer";

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
    filter: FilterValueType
    todolistID: string
}

export function TodolistMemo({
                                 todolistID,
                                 filter,
                                 ...props
                             }: PropsType) {


    const dispatch = useDispatch()

    const changeFilter = useCallback((filter: FilterValueType, todolistID: string) => {
        dispatch(ChangeTodoFilterAC(filter, todolistID))
        // dispatch(changeTasksFilterAC(todolistID,filter))
    }, [dispatch])
    const removeTodolist = useCallback((todolistID: string) => {
        dispatch(removeTodolistAC(todolistID))
    }, [dispatch])
    const onChangeTodolistTitle = useCallback((title: string) => {
        dispatch(ChangeTodoTitleAC(title, todolistID))
    }, [dispatch, todolistID])

    // const makeActive = (value: string) => filter === value ? 'active-filter' : ''

    const addTask = useCallback((title: string) => {
        console.log('addTask WORK')
        dispatch(AddTaskAC(title, todolistID))
    }, [dispatch, todolistID])

    // const TodolistRender = useMemo(() => {

        console.log(`render ${todolistID}`)
        const makeActive = (value: string) => filter === value ? 'active-filter' : ''

        return <Grid item>
            <OpacityCase>
                <h3 style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <EditableSpan title={props.title} onChange={onChangeTodolistTitle}/>
                    <Button name={'x'} callback={() => removeTodolist(todolistID)}/>
                </h3>

                <AddForm addItem={addTask}/>

                <TasksMap
                    tasks={props.tasks}
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
    // }, [todolistID, addTask, changeFilter, onChangeTodolistTitle, props.tasks, props.title, removeTodolist, filter]);

    // return <> {TodolistRender}</>
}

export const Todolist = React.memo(TodolistMemo)


const OpacityCase = styled.div`
  background: rgba(203, 209, 213, 0.7);
  padding: 15px;
  border-radius: 10px;
`

// export function TodolistMemo({
//                                  todolistID,
//                                  filter,
//                                  ...props
//                              }: PropsType) {
//     console.log('render ')
//
//     const dispatch = useDispatch()
//
//     const changeFilter = useCallback((filter: FilterValueType, todolistID: string) => {
//         dispatch(ChangeTodoFilterAC(filter, todolistID))
//     }, [dispatch,filter,todolistID])
//     const removeTodolist = useCallback((todolistID: string) => {
//         dispatch(removeTodolistAC(todolistID))
//     }, [dispatch,todolistID])
//     const onChangeTodolistTitle = useCallback((title: string) => {
//         dispatch(ChangeTodoTitleAC(title, todolistID))
//     }, [dispatch,todolistID])
//
//     const makeActive = (value: string) => filter === value ? 'active-filter' : ''
//
//     const addTask = useCallback((title: string) => {
//         console.log('addTask WORK')
//         dispatch(AddTaskAC(title, todolistID))
//     }, [dispatch,todolistID])
//
//     const todoID=useSelector<rootReducerType,Array<TodolitsType>>(state=>state.todolists)
//
//
//     return <Grid item>
//         <OpacityCase>
//             <h3 style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <EditableSpan title={props.title} onChange={onChangeTodolistTitle}/>
//                 <Button name={'x'} callback={() => removeTodolist(todolistID)}/>
//             </h3>
//
//             <AddForm addItem={addTask}/>
//
//             <TasksMap
//                 tasks={props.tasks}
//                 id={todolistID}
//                 todolistID={todolistID}/>
//
//             <div style={{display: 'flex', flexDirection: 'row'}}>
//                 <Button name={'All'} callback={() => changeFilter('all', todolistID)}
//                         className={makeActive('all')}/>
//                 <Button name={'Active'} callback={() => changeFilter('active', todolistID)}
//                         className={makeActive('active')}/>
//                 <Button name={'Complited'} callback={() => changeFilter('complited', todolistID)}
//                         className={makeActive('complited')}/>
//             </div>
//         </OpacityCase>
//     </Grid>
// }
//
