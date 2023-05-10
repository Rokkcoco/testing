type UserType = {
    [key: string]: {id: number, name: string}
}

let users: UserType

beforeEach(() => {
    users = {
        "101" : {id: 101, name: "Dimych"},
        "1212" : {id: 1212, name: "Natasha"},
        "231231" : {id: 231231, name: "Valera"},
        "1" : {id: 1, name: "Katya"}
    }
})

test.skip("should update corresponding user", () => {
    users["1"].name = "Ekaterina"

    expect(users["1"].name).toBe('Ekaterina')
    expect(users["1"]).toEqual({id: 1, name: "Ekaterina"})
})

test.skip("should delete corresponding user", () => {
   delete users["1"]

    expect(users["1"]).toBeUndefined() //"1'
})