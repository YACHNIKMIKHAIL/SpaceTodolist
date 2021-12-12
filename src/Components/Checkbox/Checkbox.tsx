import React, {ChangeEvent} from "react";

type CheckboxPropsType={
    isDone:boolean
    callback:( e: React.ChangeEvent<HTMLInputElement>)=>void
}
export const Checkbox = (props:CheckboxPropsType) => {
    const callback = (e:  React.ChangeEvent<HTMLInputElement>) => {
        debugger
      props.callback(e)
    }
  return <input type="checkbox" checked={props.isDone}
                onChange={(e) => callback(e)}/>
}