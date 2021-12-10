import React, {ChangeEvent} from 'react';

type InputPropsType = {
    className?: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.onChange(e)
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => props.onKeyPress(e)

    return <input className={props.className}
                  value={props.value}
                  onChange={(e) => onChangeHandler(e)}
                  onKeyPress={(e) => onKeyPressHandler(e)}/>
}