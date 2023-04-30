import React from "react";
import {FilterType} from "../App";

type moneyPropsType = {
    banknote: string
    value: number
    number: string
}

type moneyType = {
    data: Array<moneyPropsType>
    onClickMoney: (e:FilterType)=>void
}


const MapFilterArray = (props: moneyType) => {

    return (
        <>
        <ul>
            {props.data.map((ObjMoney, index)=> {
                return (
                    <li key={index}>
                    <span> {ObjMoney.banknote}</span>
                    <span> {ObjMoney.value}</span>
                    <span> {ObjMoney.number}</span>
                </li>
                )})}
        </ul>
            <div style={{marginLeft: '40px'}}>
                <button onClick={() => props.onClickMoney("ALL")}>all</button>
                <button onClick={() => props.onClickMoney("RUBLS")}>rub</button>
                <button onClick={() => props.onClickMoney("Dollars")}>usd</button>
            </div>
        </>
    )
}

export default MapFilterArray;