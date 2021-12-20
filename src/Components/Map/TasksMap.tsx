import React, {ChangeEvent} from "react";
import {TaskType} from "../Todolist/Todolist";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Button} from "../Button/Button";
import {CheckboxX} from "../Checkbox/Checkbox";
import styled from "styled-components";

type TasksMapType = {
    tasks: Array<TaskType>
    changeCheckbox: (id: string, e: ChangeEvent<HTMLInputElement>, todolistID: string) => void
    removeTaskX: (id: string) => void
    id: string
    changeTaskTitle: (id: string, title: string, todolistId: string) => void
    todolistID: string
}
export const TasksMap = ({tasks, changeCheckbox, removeTaskX, ...props}: TasksMapType) => {
    const changeTaskTitle = (title: string) => props.changeTaskTitle(props.id, title, props.todolistID)
    const changeCheckboxX = (id: string, e: ChangeEvent<HTMLInputElement>) => changeCheckbox(id, e, props.todolistID)

    return (
        <div>{
            tasks.map(m => {
                    return <TaskCase opacity={m.isDone ? '0.4' : '1'}
                                     color={m.isDone ? 'black' : 'white'}
                                     key={m.id} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: 'center',
                    }}>
                        <CheckboxX isDone={m.isDone}
                                   callback={(e) => changeCheckboxX(m.id, e)}/>
                        <EditableSpan title={m.title} onChange={changeTaskTitle}/>
                        <Button name={'x'} callback={() => removeTaskX(m.id)}/>
                    </TaskCase>
                }
            )
        }
        </div>
    )
}

const TaskCase = styled.div<{ opacity: string, color: string }>`
  opacity: ${props => props.opacity};
  color: ${props => props.color};
`