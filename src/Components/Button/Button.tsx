import React from 'react';
import ButtonRender from "../ButtonRender";

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
}
export const Button = React.memo(({name, callback, className}: ButtonPropsType) => {
    return (<div>
        {ButtonRender(name, callback, className)}
    </div>)
})