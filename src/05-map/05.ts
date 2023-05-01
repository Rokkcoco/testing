export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 32},
    {name: "Max Petrov", age: 18},
    {name: "Petr Sidorov", age: 20},
]


//Возвращает новый объект с объектом, содержащим массив, и берет имя через первый и второй элемента массива
const dimychTransformator = (man:ManType ) => ({
    stack: ["css", 'html','js', 'td', 'react'],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const dev3 = people.map(dimychTransformator);

const dev4 = people.map(man => ({
    stack: ["css", 'html','js', 'td', 'react'],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome!`)


//можно и в 1 строку без return
export const createGreetingMessage = (people:Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome!`)
}
/*
const users = [{name: "He"}, {name: "Po"}]
const liElements = users.map((u, index) => <li key={index}>{u.name}</li>)*/
//возвращаем ли-шки через map массива