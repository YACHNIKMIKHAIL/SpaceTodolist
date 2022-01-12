import React, {useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    onChange: (title: string) => void
}
export const EditableSpanMemo = ({onChange, ...props}: EditableSpanPropsType) => {
    const [title, setTitle] = useState<string>(props.title)
    const [editM, setEditM] = useState<boolean>(false)

    console.log('span render')
    const activateEditM = () => {
        setEditM(true)
        setTitle(props.title)
    }
    const activateViewM = () => {
        setEditM(false)
        onChange(title)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return editM
        ? <TextField id="standard-basic" label="Changes:" variant="standard" value={title} autoFocus
                     onChange={onChangeHandler} onBlur={activateViewM}
                     style={{color: 'white'}}/>
        : <span onDoubleClick={activateEditM}
        >{title}</span>
}
export const EditableSpan = React.memo(EditableSpanMemo)