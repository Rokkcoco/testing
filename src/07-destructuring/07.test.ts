type ManType = {
    name: string
    age: number
    lesson: Array<{ title: string; name?:string }>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;

beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lesson: [{title: "1"}, {title: "2"}, {title: "3", name: "react"}],
        address: {
            street: {
                title: "Moya street"
            }
        }
    }
})

test("", () => {

    //Берем свойства из объекта. Задаем переменные и делаем ссылку на объект, если совпадает то все ок
    const {age, lesson} = props;
    const {title} = props.address.street

    const [ ls1 , ls2 ] = props.lesson; //деструктизация массива где слева элемент 0(первый), справа 1(второй)
    //USESTATE возвращает массив, а мы его деструктурируем

    const [,,ls3] = props.lesson ;//деструктизация, вытаскиваем 3ий элемент

    const [,lsr1, ...restArr] = props.lesson //первый элемент пропускаем, второй берем lsr1, а все остальные разворачиваем через rest?spread?... оператор

    expect(age).toBe(32)
    expect(lesson.length).toBe(3)
    expect(title).toBe("Moya street")
    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")
    expect(ls3.title).toBe("3")
    expect(lsr1.title).toBe("2")
    expect(restArr[0]).toStrictEqual({title: "3", name: "react"}) //Проверяем первый элемент массива, в котором объект, для этого используем toStrictEqual
})