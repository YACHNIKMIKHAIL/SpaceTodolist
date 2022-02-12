import React from 'react';
import {CheckboxX} from "../../../../Components/Checkbox/Checkbox";
import {EditableSpan} from "../../../../Components/EditableSpan/EditableSpan";
import {Button} from "../../../../Components/Button/Button";
import styled from "styled-components";

type TaskPropsType = {
    status: number
    id: string
    title: string
    changeTaskStatus: (id: string,taskTitle:string, e: boolean) => void
    changeTaskTitle: (id: string,title: string) => void
    removeTask: (id: string) => void
}
const Task = React.memo(({
                             status, id, title, changeTaskStatus,
                             changeTaskTitle, removeTask
                         }: TaskPropsType) => {
    const onChangeHandler=(title:string)=>{
        changeTaskTitle(id,title)
    }
    return (
        <TaskCase opacity={status===2 ? '0.4' : '1'}
                  color={status===2 ? 'rgba(109,4,234,0.77)' : 'rgba(28,16,0,0.8)'}
                  key={id} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: 'center',
        }}>
            <CheckboxX isDone={status===2}
                       callback={(e) => changeTaskStatus(id,title, e.currentTarget.checked)}/>
            <EditableSpan title={title} onChange={onChangeHandler}/>
            <Button name={'x'} callback={() => removeTask(id)}/>
        </TaskCase>
    );
})

export default Task;
const TaskCase = styled.div<{ opacity: string, color: string }>`
  opacity: ${props => props.opacity};
  color: ${props => props.color};
`