import React, {ChangeEvent} from "react";
import {Checkbox} from "@mui/material";

type CheckboxPropsType={
    isDone:boolean
    callback: (e:ChangeEvent<HTMLInputElement>)=>void
}
export const CheckboxX = (props:CheckboxPropsType) => {
    const callback = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
      props.callback(e)
    }
  return <Checkbox  color="secondary"
                    defaultChecked={props.isDone}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => callback(e)}/>

    // <input type="checkbox" checked={props.isDone}
    //             onChange={(e) => callback(e)}/>
}