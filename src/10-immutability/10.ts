export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type UserWithCompaniesType =  {
    companies: { id: number, title: string }[]
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return  {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
   /* copy.address = {
        ...copy.address, city: city
    }*/
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: title}
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return  {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, booksArray: string[]) {
    return {
        ...u,
        books: [...u.books, ...booksArray]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook:string, newBook:string) => ({
    ...u,
    books: u.books.map(t => t === oldBook ? newBook : t)
})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, oldBook:string) => ({
    ...u,
    books: u.books.filter(t => t !== oldBook)
})


//функции достаточно одного типа, не обязательно передавать полную типизацию
export const updateCompanyTitle = (u: UserWithCompaniesType, idCompany: number, title:string) => ({
    ...u,
    companies: u.companies.map(t => t.id === idCompany ? {...t, title: title} : t)
})

export const updateCompanyTitle2 = (companies: { [key:string]: {id:number, title:string}[] }, name:  string, idCompany: number, newTitle: string) => ({
    ...companies,
    [name]: companies[name].map(t => t.id === idCompany ? {...t, title: newTitle} : t)
})