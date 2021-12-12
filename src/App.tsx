import React, {useState} from 'react';
import './App.css';
import {FilterValueType, TaskStateType, TodolitsType} from './Components/Todolist/Todolist';
import {v1} from "uuid";
import {TodolistsMap} from "./Components/Map/TodolistsMap";
import {AddForm} from "./Components/AddForm/AddForm";

function App() {
    const todolist1 = v1()
    const todolist2 = v1()
    const todolist3 = v1()
    const todolist4 = v1()
    const todolist5 = v1()
    const todolist6 = v1()
    const todolist7 = v1()
    const todolist8 = v1()
    const todolist9 = v1()

    const [tasks, setTasks] = useState<TaskStateType>({
            [todolist1]: [{id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false}],
            [todolist2]: [{id: v1(), title: "Book", isDone: false},
                {id: v1(), title: "Milk", isDone: false},
                {id: v1(), title: "Bread", isDone: false}],
            [todolist3]: [{id: v1(), title: "Helmet", isDone: true},
                {id: v1(), title: "Wheels", isDone: false},
                {id: v1(), title: "Crank", isDone: false}],
            [todolist4]: [{id: v1(), title: "Тудулист", isDone: true},
                {id: v1(), title: "Нативочка", isDone: false},
                {id: v1(), title: "Чилл)))", isDone: false}],
            [todolist5]: [{id: v1(), title: "Домой вернуться", isDone: true},
                {id: v1(), title: "Игровая комната", isDone: true},
                {id: v1(), title: "В гости к маме)", isDone: false}],
            [todolist6]: [{id: v1(), title: "Чай", isDone: true},
                {id: v1(), title: "Чай", isDone: true},
                {id: v1(), title: "Чай", isDone: false}],
            [todolist7]: [{id: v1(), title: "по обс-вам(", isDone: false},
                {id: v1(), title: "Выжить любой ценой", isDone: false},
                {id: v1(), title: "Попытаться кайфануть)", isDone: true}],
            [todolist8]: [{id: v1(), title: "Мульты", isDone: true},
                {id: v1(), title: "Сны", isDone: true},
                {id: v1(), title: "Ничё", isDone: false}],
            [todolist9]: [{id: v1(), title: "Цветы", isDone: false},
                {id: v1(), title: "Цветы", isDone: false},
                {id: v1(), title: "Цветы)", isDone: true}]
        }
    )
    const [todolists, setTodolists] = useState<Array<TodolitsType>>([
        {id: todolist1, title: 'What to learn?', filter: 'all'},
        {id: todolist2, title: 'What to buy?', filter: 'all'},
        {id: todolist3, title: 'What to fixie?', filter: 'all'},
        {id: todolist4, title: 'C чего начать?', filter: 'all'},
        {id: todolist5, title: 'Куда сходить?', filter: 'all'},
        {id: todolist6, title: 'Что пить?', filter: 'all'},
        {id: todolist7, title: 'Как жить теперь?', filter: 'all'},
        {id: todolist8, title: 'Что позырить?', filter: 'all'},
        {id: todolist9, title: 'Что подарить?', filter: 'all'}
    ])

    const removeTask = (id: string, todolistID: string) => setTasks({
        ...tasks,
        [todolistID]: tasks[todolistID].filter(f => f.id !== id)
    })
    const changeFilter = (filter: FilterValueType, todolistID: string) => setTodolists(todolists.map(m => m.id === todolistID ? {
        ...m,
        filter: filter
    } : m))

    const addTask = (title: string, todolistID: string) => setTasks({
        ...tasks,
        [todolistID]: [{id: v1(), title: title, isDone: false}, ...tasks[todolistID]]
    })

    const changeTaskStatus = (id: string, isDone: boolean, todolistID: string) => {
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].map(m => m.id === id ? {...m, isDone} : m)
        })
    }

    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter(f => f.id !== todolistID))
        delete tasks[todolistID]
        setTasks({...tasks})
    }
    const addTodolist = (title: string) => {
        let newID = v1()
        let newTodolist: TodolitsType = {id: newID, title: title, filter: 'all'}
        setTodolists([newTodolist, ...todolists])
        setTasks({...tasks, [newTodolist.id]: []})
    }
    const changeTaskTitle = (id: string, title: string, todolistId: string) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(m => m.id === id ? {...m, title: title} : m)})
    }
    const onChangeTodolistTitle = (title: string, todolistID: string) => {
        setTodolists(todolists.map(m => m.id === todolistID ? {...m, title} : m))
    }

    return <div className={'main'}>
        <div className={'head'}>
            <span className={'headText'}> What do you want to do/ change/ fix:</span>
            <AddForm addItem={addTodolist}/>
        </div>
        <TodolistsMap todolists={todolists}
                      tasks={tasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}
                      removeTodolist={removeTodolist}
                      changeTaskTitle={changeTaskTitle}
                      onChangeTodolistTitle={onChangeTodolistTitle}/>
    </div>
}

export default App;
