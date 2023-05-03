import React, {ChangeEvent, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
type FullInputType = {
    setMessage:any
    data:any
    addMessageFullInput:(title:string)=>void
}
const FullInput = (props:FullInputType):JSX.Element => {

    let [title, setTitle] = useState<string>('')

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const messageUpdate = () => {
        const news = [...props.data,
            {message:title}]
        props.setMessage(news)
        setTitle('')
    }

    //Фукнция, которая при вызове прокидывает title наверх и обрабатывается там
    const onClickButtonHandler =() => {
        props.addMessageFullInput(title)
    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={messageUpdate}>+</button>
        </div>
    );
};

export default FullInput;