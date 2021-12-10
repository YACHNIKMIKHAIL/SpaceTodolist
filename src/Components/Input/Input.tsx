import React, {ChangeEvent} from 'react';

type InputPropsType = {
    className?: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Input = ({className, value, onChange, onKeyPress}: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e)
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => onKeyPress(e)

    return <input className={className}
                  value={value}
                  onChange={(e) => onChangeHandler(e)}
                  onKeyPress={(e) => onKeyPressHandler(e)}/>
}