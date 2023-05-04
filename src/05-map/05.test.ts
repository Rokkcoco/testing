import {createGreetingMessage, ManType} from "./05";


let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: "Andrew Ivanov", age: 32},
        {name: "Max Petrov", age: 18},
        {name: "Petr Sidorov", age: 20}]
})

test.skip('should get array of greeting messages', () => {

    const messages = createGreetingMessage(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcome!')
    expect(messages[1]).toBe('Hello Max. Welcome!')
    expect(messages[2]).toBe('Hello Petr. Welcome!')
})