import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import React, {ChangeEvent, useState} from "react";

type AddFormPropsType={
    addItem:(title:string)=>void
}

export const AddForm = (props:AddFormPropsType) => {
    const [title,setTitle]=useState<string>('')
    const[error,setError]=useState<string>('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(e.currentTarget.value)
    }
    const addTaskButton = () => {
        if (title.trim() !== '') {
            props.addItem(title.trim())
            setTitle('')
        } else {
            setError('Title is undefined !')
        }
    }
    const onKeyPressAdd = (e: React.KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter') ? addTaskButton() : ''
   return <div>
        <Input value={title}
               onChange={onChangeInput}
               onKeyPress={onKeyPressAdd}
               className={error ? 'error' : ''}/>
        <Button name={'+'} callback={addTaskButton}/>
        {error ? <div className={'error-message'}>{error}</div> : ''}
    </div>
}