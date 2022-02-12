import {v1} from "uuid";
import {tasksReducer, TaskStateType} from "./TasksReducer";
import {AddTaskAC, ChangeTaskStatusAC, RemoveTaskAC} from "./TasksActions";
import {TaskPriorities, TaskStatuses} from "../../API/SpaceAPI";


test('correct task remove', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()

    const startTasksState: TaskStateType = {
        ['todolist1']: [{
            id: task1,
            title: "HTML&CSS",
            status: TaskStatuses.Complited,
            description: '',
            order: 0,
            priority: TaskPriorities.Low,
            startDate: '',
            deadline: '',
            addedDate: '',
            todoListId: todolist1
        },
            {
                id: task2,
                title: "JS",
                status: TaskStatuses.Complited,
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: todolist2
            },
            {
                id: task6,
                title: "Bread",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: todolist2
            }]
    }

    const endTasksState = tasksReducer(startTasksState, RemoveTaskAC('todolist2', task5))

    expect(endTasksState[todolist2].length).toBe(2)
    expect(endTasksState[todolist2].find(f => f.title === "Milk")).toBe(undefined)
})

test('correct change task status', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()

    const startTasksState: TaskStateType = {
        ['todolist1']: [{
            id: task1,
            title: "HTML&CSS",
            status: TaskStatuses.Complited,
            description: '',
            order: 0,
            priority: TaskPriorities.High,
            startDate: '',
            deadline: '',
            addedDate: '',
            todoListId: todolist1
        },
            {
                id: task2,
                title: "JS",
                status: TaskStatuses.Complited,
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: todolist1
            },
            {
                id: task3,
                title: "ReactJS",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.Later,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist1'
            }],
        ['todolist2']: [{
            id: task4,
            title: "Book",
            status: TaskStatuses.New,
            description: '',
            order: 0,
            priority: TaskPriorities.High,
            startDate: '',
            deadline: '',
            addedDate: '',
            todoListId: 'todolist2'
        },
            {
                id: task5,
                title: "Milk",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist2'
            },
            {
                id: task6,
                title: "Bread",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.Later,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist2'
            }]
    }

    const endTasksState = tasksReducer(startTasksState, ChangeTaskStatusAC(todolist1, task3, {
        id: task3,
        title: "ReactJS",
        status: TaskStatuses.Complited,
        description: '',
        order: 0,
        priority: TaskPriorities.Later,
        startDate: '',
        deadline: '',
        addedDate: '',
        todoListId: 'todolist1'
    }))

    expect(endTasksState[todolist1].length).toBe(3)
    expect(endTasksState[todolist1][1].status).toBe(TaskStatuses.Complited)
    expect(endTasksState[todolist1][2].status).toBe(TaskStatuses.Complited)
})

test('correct add task', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()
    let task7 = v1()

    const startTasksState: TaskStateType = {
        ['todolist1']: [{
            id: task1,
            title: "HTML&CSS",
            status: TaskStatuses.Complited,
            description: '',
            order: 0,
            priority: TaskPriorities.Low,
            startDate: '',
            deadline: '',
            addedDate: '',
            todoListId: todolist1
        },
            {
                id: task2,
                title: "JS",
                status: TaskStatuses.Complited,
                description: '',
                order: 0,
                priority: TaskPriorities.High,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist1'
            },
            {
                id: task3,
                title: "ReactJS",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.High,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: todolist1
            }],
        ['todolist2']: [{
            id: task4,
            title: "Book",
            status: TaskStatuses.New,
            description: '',
            order: 0,
            priority: TaskPriorities.High,
            startDate: '',
            deadline: '',
            addedDate: '',
            todoListId: todolist2
        },
            {
                id: task5,
                title: "Milk",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.High,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist2'
            },
            {
                id: task6,
                title: "Bread",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.Later,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist2'
            }]
    }

    const endTasksState = tasksReducer(startTasksState, AddTaskAC('todolist1', {
        id: task7,
        title: 'New Task',
        status: TaskStatuses.New,
        description: '',
        order: 0,
        priority: TaskPriorities.Later,
        startDate: '',
        deadline: '',
        addedDate: '',
        todoListId: 'todolist2'
    }))

    expect(endTasksState[todolist1].length).toBe(4)
    expect(endTasksState[todolist1][0].title).toBe('New Task')
})

test('correct change task title', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()

    const startTasksState: TaskStateType = {
        ['todolist1']: [{
            id: task1,
            title: "HTML&CSS",
            status: TaskStatuses.Complited,
            description: '',
            order: 0,
            priority: TaskPriorities.Later,
            startDate: '',
            deadline: '',
            addedDate: '',
            todoListId: todolist1
        },
            {
                id: task2,
                title: "JS",
                status: TaskStatuses.Complited,
                description: '',
                order: 0,
                priority: TaskPriorities.High,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist1'
            },
            {
                id: task3,
                title: "ReactJS",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.Middle,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist1'
            }],
        ['todolist2']: [{
            id: task4,
            title: "Book",
            status: TaskStatuses.New,
            description: '',
            order: 0,
            priority: TaskPriorities.Later,
            startDate: '',
            deadline: '',
            addedDate: '',
            todoListId: 'todolist2'
        },
            {
                id: task5,
                title: "Milk",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.High,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist2'
            },
            {
                id: task6,
                title: "Bread",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.Later,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist2'
            }]
    }

    const endTasksState = tasksReducer(startTasksState, ChangeTaskStatusAC('todolist2', task6, {
        id: task6,
        title: 'Ravasfjdv',
        status: TaskStatuses.New,
        description: '',
        order: 0,
        priority: TaskPriorities.Later,
        startDate: '',
        deadline: '',
        addedDate: '',
        todoListId: 'todolist2'
    }))

    expect(endTasksState[todolist2].length).toBe(3)
    expect(endTasksState[todolist2][2].title).toBe('Ravasfjdv')
    expect(endTasksState[todolist2][2].status).toBe(TaskStatuses.New)
})

test('correct add task list', () => {
    let todolist1 = v1()
    let todolist2 = v1()
    let task1 = v1()
    let task2 = v1()
    let task3 = v1()
    let task4 = v1()
    let task5 = v1()
    let task6 = v1()

    const startTasksState: TaskStateType = {
        ['todolist1']: [{
            id: task1,
            title: "HTML&CSS",
            status: TaskStatuses.Complited,
            description: '',
            order: 0,
            priority: TaskPriorities.Middle,
            startDate: '',
            deadline: '',
            addedDate: '',
            todoListId: 'todolist1'
        },
            {
                id: task2,
                title: "JS",
                status: TaskStatuses.Complited,
                description: '',
                order: 0,
                priority: TaskPriorities.High,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist1'
            },
            {
                id: task3,
                title: "ReactJS",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.Later,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist1'
            }],
        [todolist2]: [{
            id: task4,
            title: "Book",
            status: TaskStatuses.New,
            description: '',
            order: 0,
            priority: TaskPriorities.Later,
            startDate: '',
            deadline: '',
            addedDate: '',
            todoListId: 'todolist2'
        },
            {
                id: task5,
                title: "Milk",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.High,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist2'
            },
            {
                id: task6,
                title: "Bread",
                status: TaskStatuses.New,
                description: '',
                order: 0,
                priority: TaskPriorities.High,
                startDate: '',
                deadline: '',
                addedDate: '',
                todoListId: 'todolist2'
            }]
    }
})
