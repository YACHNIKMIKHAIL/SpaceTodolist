import React, {ChangeEvent, useState} from 'react';
import {TasksMap} from "../Map/TasksMap";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

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
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(e.currentTarget.value)
    }
    const addTaskButton = () => {
        if (title.trim() !== '') {
            addTask(title.trim(), todolistID)
            setTitle('')
        } else {
            setError('Title is undefined !')
        }
    }
    const changeTasksFiler = (value: FilterValueType, todolistID: string) => changeFilter(value, todolistID)
    const removeTaskX = (id: string) => removeTask(id, todolistID)
    const onKeyPressAdd = (e: React.KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter') ? addTaskButton() : ''
    const changeCheckbox = (id: string, e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(id, e.currentTarget.checked, todolistID)
    const removeTodolistX = () => removeTodolist(todolistID)

    return <div>
        <h3>{props.title}
            {/*<button onClick={removeTodolistX}>x</button>*/}
            <Button name={'x'} callback={removeTodolistX}/>
        </h3>
        <div>
            {/*<input className={error ? 'error' : ''}*/}
            {/*       value={title}*/}
            {/*       onChange={onChangeInput}*/}
            {/*       onKeyPress={onKeyPressAdd}/>*/}
            <Input value={title}
                   onChange={onChangeInput}
                   onKeyPress={onKeyPressAdd}
                   className={error ? 'error' : ''}/>
            {/*<button onClick={addTaskButton}>+</button>*/}
            <Button name={'+'} callback={addTaskButton}/>
        </div>
        {error ? <div className={'error-message'}>{error}</div> : ''}


        <TasksMap tasks={props.tasks}
                  changeCheckbox={changeCheckbox}
                  removeTaskX={removeTaskX}
                  id={todolistID}/>


        <div>
            {/*<button className={filter === 'all' ? 'active-filter' : ''}*/}
            {/*        onClick={() => changeTasksFiler('all', todolistID)}>All*/}
            {/*</button>*/}
            {/*<button className={filter === 'active' ? 'active-filter' : ''}*/}
            {/*        onClick={() => changeTasksFiler('active', todolistID)}>Active*/}
            {/*</button>*/}
            {/*<button className={filter === 'complited' ? 'active-filter' : ''}*/}
            {/*        onClick={() => changeTasksFiler('complited', todolistID)}>Completed*/}
            {/*</button>*/}
            <Button name={'All'} callback={() => changeTasksFiler('all', todolistID)}
                    className={filter === 'all' ? 'active-filter' : ''}/>
            <Button name={'Active'} callback={() => changeTasksFiler('active', todolistID)}
                    className={filter === 'active' ? 'active-filter' : ''}/>
            <Button name={'Complited'} callback={() => changeTasksFiler('complited', todolistID)}
                    className={filter === 'complited' ? 'active-filter' : ''}/>
        </div>
    </div>
}
