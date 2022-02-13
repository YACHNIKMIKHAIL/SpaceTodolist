import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type InputPropsType = {
    error: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onKeyPress: (e: React.KeyboardEvent<HTMLDivElement>) => void
    disabled: boolean
}

export const Input = React.memo(({
                                     error, value, onChange, onKeyPress, disabled
                                 }: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e)
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => onKeyPress(e)

    return <TextField id="outlined-basic"
                      label="New challenge"
                      variant="outlined"
                      value={value}
                      onChange={(e) => onChangeHandler(e)}
                      onKeyPress={(e) => onKeyPressHandler(e)}
                      helperText={error}
                      style={{color: 'whitesmoke'}}
                      disabled={disabled}/>
})