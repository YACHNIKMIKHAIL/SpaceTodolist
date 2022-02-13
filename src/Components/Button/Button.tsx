import React from 'react';
import ButtonRender from "../ButtonRender";

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
    disabled?:boolean
}
export const Button = React.memo(({name, callback, className,disabled}: ButtonPropsType) => {
    return (<div>
        {ButtonRender(name, callback, className,disabled)}
    </div>)
})