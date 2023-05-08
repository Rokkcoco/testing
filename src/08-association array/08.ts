const usersObj = {
    "0" : "Dimych",
    "1" : "Natasha",
    "2" : "Valera",
    "3" : "Katya"
}

Object.keys(usersObj)

Object.values(usersObj)

// usersObj[null] = "good"; //null превратился в строку и добавился

// usersObj[ {} ] = "fine" // произойдет вызов метод toString(), и определит {} как object Object и появится строковое значение object Object = "fine"

type UserType = {
    [key: string]: {id: number, name: string}
}

export const users: UserType = {
    "101" : {id: 101, name: "Dimych"},
    "1212" : {id: 1212, name: "Natasha"},
    "231231" : {id: 231231, name: "Valera"},
    "1" : {id: 1, name: "Katya"}
}

const user = {id: 100500, name: "Igor"}
users[user.id] = user //id превратится в строку, добавляем пользователя, если уже такой был, он перезатрется и не надо перед этим искать совпадение
delete users[user.id] //удалить пользователя по айди, легко и просто, без поисков в массиве
users[user.id].name = "Vitya" //переназначили ему новое имя

export const usersArray = [
    {id: 101, name: "Dimych"},
    {id: 1212, name: "Natasha"},
    {id: 231231, name: "Valera"},
    {id: 1, name: "Katya"}
]