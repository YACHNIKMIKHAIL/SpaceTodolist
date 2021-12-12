import React, {ChangeEvent} from "react";

type CheckboxPropsType={
    isDone:boolean
    callback:(e: ChangeEvent<HTMLInputElement>)=>void
}
export const Checkbox = (props:CheckboxPropsType) => {
    const callback = (e: ChangeEvent<HTMLInputElement>) => {
      props.callback(e)
    }
  return <input type="checkbox" checked={props.isDone}
                onChange={(e) => callback(e)}/>
}