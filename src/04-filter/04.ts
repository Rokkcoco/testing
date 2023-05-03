const ages = [1, 2, 50, 70, 100, 52];

const predicate = (age: number) => age > 90


const oldAges = [100, 91];

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]

const chipPredicate = (course:CourseType) => course.price < 160


const chipCourses = [
    {title: "JS", price: 200},
    {title: "React", price: 150}
]
