import React from 'react';
import {CheckboxX} from "../Checkbox/Checkbox";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Button} from "../Button/Button";
import styled from "styled-components";

type TaskPropsType = {
    isDone: boolean
    id: string
    title: string
    changeTaskStatus: (id: string, e: boolean) => void
    changeTaskTitle: (title: string) => void
    removeTask: (id: string) => void
}
const Task = ({
                  isDone, id, title, changeTaskStatus,
                  changeTaskTitle, removeTask
              }: TaskPropsType) => {
    return (
        <TaskCase opacity={isDone ? '0.4' : '1'}
                  color={isDone ? 'rgba(109,4,234,0.77)' : 'rgba(28,16,0,0.8)'}
                  key={id} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: 'center',
        }}>
            <CheckboxX isDone={isDone}
                       callback={(e) => changeTaskStatus(id, e.currentTarget.checked)}/>
            <EditableSpan title={title} onChange={changeTaskTitle}/>
            <Button name={'x'} callback={() => removeTask(id)}/>
        </TaskCase>
    );
};

export default Task;
const TaskCase = styled.div<{ opacity: string, color: string }>`
  opacity: ${props => props.opacity};
  color: ${props => props.color};
`