import React from 'react';

type Button2Type = {
    name:string,
    buttonHandler: ()=>void
}
const Button2 = (props:Button2Type) => {
    const onClickButtonHandler = () => {
        props.buttonHandler()
    }
    return (
            <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};

export default Button2;