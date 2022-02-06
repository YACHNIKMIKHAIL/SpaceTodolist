import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import React, {ChangeEvent, useCallback, useState} from "react";


type AddFormPropsType = {
    addItem: (title: string) => void
}

export const AddFormMemo = (props: AddFormPropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onKeyPressAdd = (e: React.KeyboardEvent<HTMLDivElement>) => (e.key === 'Enter') ? addTaskButton() : ''

    const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError('')
        setTitle(e.currentTarget.value)
    }, [])
    const addTaskButton = useCallback(() => {
        if (title.trim() !== '') {
            props.addItem(title.trim())
            setTitle('')
        } else {
            setError('Title is undefined !')
        }
    }, [props, title])

    return <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        < Input value={title}
                onChange={onChangeInput}
                onKeyPress={onKeyPressAdd}
                error={error}/>
        <Button name={'+'} callback={addTaskButton}/>
    </div>
}

export const AddForm = React.memo(AddFormMemo)