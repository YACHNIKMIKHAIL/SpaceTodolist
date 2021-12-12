import React, {ChangeEvent} from "react";
import {TaskType} from "../Todolist/Todolist";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Button} from "../Button/Button";
import {Checkbox} from "../Checkbox/Checkbox";

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
                const changeCheckboxX=(e: ChangeEvent<HTMLInputElement>)=>{
                    changeCheckbox(m.id,e)
                }
                    return <li key={m.id} className={m.isDone ? 'is-done' : ''}>
                        <Checkbox isDone={m.isDone} callback={changeCheckboxX}/>
                        <EditableSpan title={m.title} onChange={changeTaskTitle}/>
                        <Button name={'x'} callback={() => removeTaskX(m.id)}/>
                    </li>
                }
            )
        }
        </ul>
    )
}