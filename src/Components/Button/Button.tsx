import React from 'react';
import ButtonRender from "../ButtonRender";

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
}
export const Button = ({name, callback, className}: ButtonPropsType) => {
    // const onClickHandler = () => callback()

    return (<div>
        {ButtonRender(name, callback, className)}
    </div>)

    // <button className={className}
    //                onClick={(e) => onClickHandler()}>{name}</button>
}