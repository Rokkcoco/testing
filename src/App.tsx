import React, {useState} from 'react';
import './App.css';
import MapFilterArray from "./components/MapFilterArray";
import {Button} from "./components/Button";
import FullInput from "./components/FullInput";
import Input from "./components/Input";
import Button2 from "./components/Button2";
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

    let [message, setMessage] = useState<Array<messageType>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])


    return (

        /*   <MapFilterArray data={aaMoney} onClickMoney={onClickMoney}/>*/

            /* <Button name={'Surname'} callback={() => Button1Foo(names)}/>
   <Button name={'Name'} callback={() => Button2Foo(names)}/>*/
        <div className="App">
            {/*<FullInput setMessage={setMessage} data={message}/>*/}

            <Input/>
            <Button2 name={`+`} callback={()=>{}}/>


            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )

    })}
        </div>
            )

}

export default App;
