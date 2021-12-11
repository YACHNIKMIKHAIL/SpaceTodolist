import React, {useState} from "react";

type EditableSpanPropsType={
  title:string
  onChange:(title:string)=>void
}
export const EditableSpan = (props:EditableSpanPropsType) => {
  const [title,setTitle]=useState<string>(props.title)
  const [editM,setEditM]=useState<boolean>(false)
  const activateEditM=()=>{
    setEditM(true)
    setTitle(props.title)
  }
  const activateViewM=()=>{
    setEditM(false)
    props.onChange(title)
  }

  return editM
      ?<input value={title} autoFocus onChange={(e)=>setTitle(e.currentTarget.value)} onBlur={activateViewM}/>
      :<span onDoubleClick={activateEditM}>{title}</span>
}