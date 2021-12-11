import React, {ChangeEvent} from "react";
import {TaskType} from "../Todolist/Todolist";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Button} from "../Button/Button";

type TasksMapType = {
    tasks: Array<TaskType>
    changeCheckbox: (id: string, e: ChangeEvent<HTMLInputElement>) => void
    removeTaskX: (id: string) => void
    id: string
    changeTaskTitle: (id: string, title: string, todolistId: string) => void
}
export const TasksMap = ({tasks, changeCheckbox, removeTaskX, ...props}: TasksMapType) => {
    return (
        <ul>{
            tasks.map(m => {
                    const changeTaskTitle = (title: string) => {
                        props.changeTaskTitle(m.id, title, props.id)
                    }
                    return <li key={m.id} className={m.isDone ? 'is-done' : ''}>
                        <input type="checkbox" checked={m.isDone}
                               onChange={(e) => changeCheckbox(m.id, e)}/>
                        <EditableSpan title={m.title} onChange={changeTaskTitle}/>
                        <Button name={'x'} callback={() => removeTaskX(m.id)}/>
                    </li>
                }
            )
        }
        </ul>
    )
}