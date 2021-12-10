import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
}
export const Button = ({name, callback, className}: ButtonPropsType) => {
    const onClickHandler = () => callback()

    return <button className={className}
                   onClick={(e) => onClickHandler()}>{name}</button>
}