import React, {useCallback, useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    onChange: (title: string) => void
}
export const EditableSpanMemo = ({onChange,title}: EditableSpanPropsType) => {
    const [stateTitle, setStateTitle] = useState<string>('')
    const [editM, setEditM] = useState<boolean>(false)

    console.log(stateTitle)
    const activateEditM = () => {
        setEditM(true)
        setStateTitle(title)
    }
    const activateViewM = () => {
        setEditM(false)
        onChange(stateTitle)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setStateTitle(e.currentTarget.value)

    return editM
        ? <TextField id="standard-basic" label="Changes:" variant="standard" value={stateTitle} autoFocus
                     onChange={onChangeHandler} onBlur={activateViewM}
                     style={{color: 'white'}}/>
        : <span onDoubleClick={activateEditM}
        >{title}</span>
}
export const EditableSpan = React.memo(EditableSpanMemo)