import {MouseEvent, ChangeEvent} from "react";
/*const callback = ():number => {
    alert("hey")
    return 12
}

window.setTimeout(callback, 1000)*/

export const User = () => {

    const deleteUser = () => {
        alert('user deleted')
    }

    const saveUser = () => {
        alert('user saved')
    }

    const deleteButtonHandler = (event:MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
        deleteUser()
    }
    //event.currentTarget - объект нажатия, target - если нужен элемент ниже по погружению, например li в ul
    const saveButtonHandler = (event:MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
        saveUser()
    }

    const onNameChange = () => {
        console.log("name changed")
    }

    const textAreaLostFocus = () => {
        console.log('focus lost')
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("current value " + event.currentTarget.value)
    }


    //onBlue - когда теряет фокус
    return <div><textarea onBlur={textAreaLostFocus} onChange={onNameChange}>Dimych</textarea>
        <input onChange={onChangeInputHandler}/>
        <button name="delete" tabIndex={3} onClick={deleteButtonHandler}>Delete</button>
        <button name="save" tabIndex={2} onClick={saveButtonHandler}>Save</button>
    </div>
}
