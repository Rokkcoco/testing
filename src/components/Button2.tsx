import React from 'react';

type Button2Type = {
    name:string,
    callback:()=>void
}
const Button2 = (props:Button2Type) => {
    const onClickButtonHandler = () => {
        props.callback()
    }
    return (
            <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};

export default Button2;