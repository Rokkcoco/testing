import React, {ChangeEvent, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
type FullInputType = {
    setMessage:any
    data:any
}
const FullInput = (props:FullInputType) => {

    let [title, setTitle] = useState<any>('')

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const messageUpdate = () => {
        const news = [...props.data,
            {message:title}]
        props.setMessage(news)
        setTitle('')
    }

    return (
        <div>
            <input id='1' value={title} onChange={onChangeInputHandler}/>
            <button onClick={messageUpdate}>+</button>
        </div>
    );
};

export default FullInput;