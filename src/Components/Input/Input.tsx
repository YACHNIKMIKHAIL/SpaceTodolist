import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type InputPropsType = {
    error: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onKeyPress: (e: React.KeyboardEvent<HTMLDivElement>) => void
}

export const Input = ({error, value, onChange, onKeyPress}: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e)
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => onKeyPress(e)

    return <TextField id="outlined-basic"
                      label="New challenge"
                      variant="outlined"
                      value={value}
                      onChange={(e) => onChangeHandler(e)}
                      onKeyPress={(e) => onKeyPressHandler(e)}
                      helperText={error}
                      style={{color: 'whitesmoke'}}/>

    // <input className={className}
    //               value={value}
    //               onChange={(e) => onChangeHandler(e)}
    //               onKeyPress={(e) => onKeyPressHandler(e)}/>
}