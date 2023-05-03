test.skip("should take old man older then 90", () => {
    const ages = [1, 2, 50, 70, 100, 52];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})
test.skip("should take courses chipper 160", () => {
    type CoursesType = {
        title: string
        price: number
    }

    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]

    const chipCourses = courses.filter(course => course.price < 160);


    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
})


test.skip("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: true},
        {id: 2, title: "Milk", isDone: false},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe("Milk");
})