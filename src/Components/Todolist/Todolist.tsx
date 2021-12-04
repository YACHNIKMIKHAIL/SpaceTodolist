import React, {ChangeEvent, useState} from 'react';

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

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(e.currentTarget.value)
    }
    const addTaskButton = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim(), props.todolistID)
            setTitle('')
        } else {
            setError('Title is undefined !')
        }
    }
    const changeTasksFiler = (value: FilterValueType, todolistID: string) => props.changeFilter(value, todolistID)
    const removeTaskX = (id: string) => {
        props.removeTask(id, props.todolistID)
    }
    const onKeyPressAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskButton()
        }
    }
    const changeCheckbox = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(id, e.currentTarget.checked, props.todolistID)
    }
    const removeTodolistX = () => {
        props.removeTodolist(props.todolistID)
    }

    return <div>
        <h3>{props.title}
            <button onClick={removeTodolistX}>x</button>
        </h3>
        <div>
            <input className={error ? 'error' : ''}
                   value={title}
                   onChange={onChangeInput}
                   onKeyPress={onKeyPressAdd}/>
            <button onClick={addTaskButton}>+</button>
        </div>
        {error ? <div className={'error-message'}>{error}</div> : ''}
        <ul>
            {props.tasks.map(m => <li key={m.id} className={m.isDone ? 'is-done' : ''}>
                <input type="checkbox" checked={m.isDone}
                       onChange={(e) => changeCheckbox(m.id, e)}/>
                <span>{m.title}</span>
                <button onClick={(e) => removeTaskX(m.id)}>x</button>
            </li>)}
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''}
                    onClick={() => changeTasksFiler('all', props.todolistID)}>All
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''}
                    onClick={() => changeTasksFiler('active', props.todolistID)}>Active
            </button>
            <button className={props.filter === 'complited' ? 'active-filter' : ''}
                    onClick={() => changeTasksFiler('complited', props.todolistID)}>Completed
            </button>
        </div>
    </div>
}
