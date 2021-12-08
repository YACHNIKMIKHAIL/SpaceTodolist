import React, {ChangeEvent} from "react";
import {TaskType} from "../Todolist/Todolist";

type TasksMapType = {
    tasks: Array<TaskType>
    changeCheckbox: (id: string, e: ChangeEvent<HTMLInputElement>) => void
    removeTaskX: (id: string) => void
    id: string
}
export const TasksMap = (props: TasksMapType) => {
    return (
        <ul>{
            props.tasks.map(m => {
                    return <li key={m.id} className={m.isDone ? 'is-done' : ''}>
                        <input type="checkbox" checked={m.isDone}
                               onChange={(e) => props.changeCheckbox(m.id, e)}/>
                        <span>{m.title}</span>
                        <button onClick={(e) => props.removeTaskX(m.id)}>x</button>
                    </li>
                }
            )
        }
        </ul>
    )
}