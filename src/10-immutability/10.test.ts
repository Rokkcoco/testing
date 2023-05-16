import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./10";



test("reference type test", () => {
    const user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk"
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {
    const user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const movedUser = moveUser(user, "Kiev")

    expect(movedUser.laptop).toBe(user.laptop)
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe("Kiev")

})

test("upgrade laptop to macbook", () => {
    const user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const userWithMacbook = upgradeUserLaptop(user, "Macbook")

    expect(userWithMacbook.address).toBe(user.address)
    expect(user).not.toBe(userWithMacbook)
    expect(user.laptop).not.toBe(userWithMacbook.laptop)
    expect(userWithMacbook.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("Zenbook")

})

test("upgrade laptop to macbook", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithMacbook = moveUserToOtherHouse(user, 55)

    expect(user).not.toBe(userWithMacbook)
    expect(userWithMacbook.address).not.toBe(user.address)
    expect(userWithMacbook.books).toBe(user.books)
    expect(user.laptop).toBe(userWithMacbook.laptop)
    expect(userWithMacbook.laptop.title).toBe("Zenbook")
    expect(userWithMacbook.address.house).toBe(55)

})

test("add new books to user array", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithMacbook = addNewBooksToUser(user, ['typescript', 'restapi'])

    expect(user).not.toBe(userWithMacbook)
    expect(userWithMacbook.books).not.toBe(user.books)
    expect(userWithMacbook.address).toBe(user.address)
    expect(userWithMacbook.laptop).toBe(user.laptop)
    expect(userWithMacbook.books[4]).toBe('typescript')
    expect(userWithMacbook.books[5]).toBe('restapi')
    expect(userWithMacbook.books.length).toBe(6)
})

test("update js to ts", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithMacbook = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userWithMacbook)
    expect(userWithMacbook.books).not.toBe(user.books)
    expect(userWithMacbook.address).toBe(user.address)
    expect(userWithMacbook.laptop).toBe(user.laptop)
    expect(userWithMacbook.books[2]).toBe('ts')
})

test("remove js book", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithMacbook = removeBook(user, 'js')

    expect(user).not.toBe(userWithMacbook)
    expect(userWithMacbook.books).not.toBe(user.books)
    expect(userWithMacbook.address).toBe(user.address)
    expect(userWithMacbook.laptop).toBe(user.laptop)
    expect(userWithMacbook.books[2]).not.toBe('ts')
    expect(userWithMacbook.books[2]).toBe('react')
})

test("update company", () => {
    const user: UserWithLaptopType & UserWithCompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, title: "Emam"}, {id: 2, title: "IT-INCUBATOR"}]
    }
    //чтобы исправить undefined, а так же вернуть созданному объекту полную типизацию
    const userCopy = updateCompanyTitle(user, 1, "Epam") as UserWithLaptopType & UserWithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[0].title).toBe("Epam")

})

test("update company", () => {
    const user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const companies = {
        "Dimych": [{id: 1, title: "Emam"}, {id: 2, title: "IT-INCUBATOR"}],
        "Artem": [{id: 1, title: "IT-INCUBATOR"}]
    }

   const companyCopy = updateCompanyTitle2(companies, "Dimych", 1, "Epam")

    expect(companyCopy["Dimych"][0]["title"]).toBe("Epam")
    expect(companies["Dimych"]).not.toBe(companyCopy["Dimych"])
    expect(companies["Artem"]).toBe(companyCopy["Artem"])
})