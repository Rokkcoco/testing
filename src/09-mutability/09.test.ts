function increaseAge(u: UserType) {
    u.age++
}

export type UserType = {
    name: string
    age: number

}
export type UserType2 = {
    name: string
    age: number
    address: {title: string}
}

test('big reference type test', () => {

    const user: UserType = {
        name: "Dimych",
        age: 32
    }

    increaseAge(user)

    expect(user.age).toBe(33)
})

test("array reference test", ()=>{
    const users: UserType[] = [
        {
            name: "Dimych",
            age: 32
        },
        {
            name: "Alena",
            age: 30
        }
    ]

    const admins: UserType[] = users

    admins.push({name: "Valera", age: 25})

    expect(users[2]).toEqual({name: "Valera", age: 25})
})

test("value type test", ()=>{
    let usersCount = 100

    let adminsCount = usersCount

    adminsCount++

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test('reference type test', () => {

    const user: UserType2 = {
        name: "Dimych",
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    const addr = user.address

    const user2: UserType2 = {
        name: "Natasha",
        age: 30,
        address: user.address
    }

    user2.address.title = "Kanary"

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Kanary")
})

test('reference array type test', () => {

    const address = {
        title: "Minsk"
    }

    const user: UserType2 = {
        name: "Dimych",
        age: 32,
        address: address
    }

    const user2: UserType2 = {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [user , user2, {name: "Misha", age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = "Dmitry"

    expect(user.name).toBe("Dmitry")

})

test("sort array test", ()=> {
    const letter = ["z", "y", "t", "a"]
    letter.sort()

    expect(letter).toEqual(["a", "t", "y", "z"])
})