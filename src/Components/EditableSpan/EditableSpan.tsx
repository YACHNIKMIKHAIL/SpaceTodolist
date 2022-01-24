import React, {useCallback, useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    onChange: (title: string) => void
}
export const EditableSpanMemo = ({onChange,title}: EditableSpanPropsType) => {
    const [stateTitle, setStateTitle] = useState<string>(title)
    const [editM, setEditM] = useState<boolean>(false)

    console.log('span render')
    const activateEditM = useCallback(() => {
        setEditM(true)
        setStateTitle(title)
    }, [])
    const activateViewM = useCallback(() => {
        setEditM(false)
        onChange(stateTitle)
    }, [])
    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setStateTitle(e.currentTarget.value), [])

    return editM
        ? <TextField id="standard-basic" label="Changes:" variant="standard" value={stateTitle} autoFocus
                     onChange={onChangeHandler} onBlur={activateViewM}
                     style={{color: 'white'}}/>
        : <span onDoubleClick={activateEditM}
        >{stateTitle}</span>
}
export const EditableSpan = React.memo(EditableSpanMemo)