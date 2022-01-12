import React, {ChangeEvent, useCallback} from "react";
import {Checkbox} from "@mui/material";

type CheckboxPropsType = {
    isDone: boolean
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}
export const CheckboxX = React.memo((props: CheckboxPropsType) => {
    console.log('checkBOX')
    const callback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e)
    }, [props])
    return <Checkbox color="secondary"
                     defaultChecked={props.isDone}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => callback(e)}/>
})