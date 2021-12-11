import React, {useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange: (title: string) => void
}
export const EditableSpan = ({onChange, ...props}: EditableSpanPropsType) => {
    const [title, setTitle] = useState<string>(props.title)
    const [editM, setEditM] = useState<boolean>(false)
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
        ? <input value={title} autoFocus onChange={onChangeHandler} onBlur={activateViewM}/>
        : <span onDoubleClick={activateEditM}>{title}</span>
}