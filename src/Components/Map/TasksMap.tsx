import React, {ChangeEvent} from "react";
import {TaskType} from "../Todolist/Todolist";

type TasksMapType = {
    tasks: Array<TaskType>
    changeCheckbox: (id: string, e: ChangeEvent<HTMLInputElement>) => void
    removeTaskX: (id: string) => void
    id: string
}
export const TasksMap = ({tasks, changeCheckbox, removeTaskX, ...props}: TasksMapType) => {
    return (
        <ul>{
            tasks.map(m => {
                    return <li key={m.id} className={m.isDone ? 'is-done' : ''}>
                        <input type="checkbox" checked={m.isDone}
                               onChange={(e) => changeCheckbox(m.id, e)}/>
                        <span>{m.title}</span>
                        <button onClick={(e) => removeTaskX(m.id)}>x</button>
                    </li>
                }
            )
        }
        </ul>
    )
}