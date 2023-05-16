import React, {useState} from 'react';
import './App.css';
import MapFilterArray from "./components/MapFilterArray";
import {Button} from "./components/Button";
import FullInput from "./components/FullInput";
import Input from "./components/Input";
import Button2 from "./components/Button2";

import {log} from "util";
// import MapFilterArray from "./components/MapFilterArray";

export type FilterType = 'ALL' | 'Dollars' | 'RUBLS'

type namesType = {
    name: string
    surname: string
}

type messageType = {
    message: string
}

function App() {

    //Сортировка массива через кнопки MapFilterArray
    /*    const [money, setMoney] = useState( [
            { banknote: 'Dollars', value: 100, number: ' a1234567890' },
            { banknote: 'Dollars', value: 50, number: ' z1234567890' },
            { banknote: 'RUBLS', value: 100, number: ' w1234567890' },
            { banknote: 'Dollars', value: 100, number: ' e1234567890' },
            { banknote: 'Dollars', value: 50, number: ' c1234567890' },
            { banknote: 'RUBLS', value: 100, number: ' r1234567890' },
            { banknote: 'Dollars', value: 50, number: ' x1234567890' },
            { banknote: 'RUBLS', value: 50, number: ' v1234567890' },
        ])
        const [filter, setFilter] = useState<FilterType>('ALL'); //Сортировка массива через кнопки
        let aaMoney = money;
        if (filter == "Dollars") {
            aaMoney = money.filter(e => e.banknote === "Dollars")
        }
        if (filter == "RUBLS") {
            aaMoney = money.filter(e => e.banknote=== "RUBLS")
        }
        const onClickMoney = (nameButton:FilterType) => {
            setFilter(nameButton)
        }*/


    //Кнопки с выводом данных из объекта Button
    /* const Button1Foo = (data: namesType) => {
         console.log(data.surname)
     }
     const Button2Foo = (data: namesType) => {
         console.log(data.name)
     }
     const names = {
         name: "ivan",
         surname: "ivanov"
     }*/


    // //FullInput
    // let [message, setMessage] = useState<Array<messageType>>([
    //     {message: 'message1'},
    //     {message: 'message2'},
    //     {message: 'message3'},
    // ])
    // //Input
    // let [title, setTitle] = useState<string>('')
    //
    // //Функция которая принимает прокинутый title снизу и обрабатывает его. FullInput
    // const addMessageFullInput = (title:string) => {
    //     let newMessage = [...message, {message: title}]
    //     setMessage(newMessage)
    // }

    //Button2
    // const addMessage = (title:string) => {
    //     setMessage([...message, {message: title}])
    //     setTitle('')
    // }
    //Button2
    // const buttonHandler = () => { //функция обертка, можно просто передать колбэк ()=>addMessage(title)
    //     addMessage(title)
    // }





    return (

        /*   <MapFilterArray data={aaMoney} onClickMoney={onClickMoney}/>*/

            /* <Button name={'Surname'} callback={() => Button1Foo(names)}/>
   <Button name={'Name'} callback={() => Button2Foo(names)}/>*/




        /*<FullInput setMessage={setMessage} data={message} addMessageFullInput={addMessageFullInput}/>

    <Input title={title} setTitle={setTitle}/>
    <Button2 name={`+`} buttonHandler={buttonHandler}/>


    {message.map((el, index) => {
        return (
            <div key={index}>{el.message}</div>
        )

    })}*/
        <div className="App">

        </div>
            )

}

export default App;
