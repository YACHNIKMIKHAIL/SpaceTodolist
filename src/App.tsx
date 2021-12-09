import React, {useState} from 'react';
import './App.css';
import {FilterValueType, TaskStateType, Todolist, TodolitsType} from './Components/Todolist/Todolist';
import {v1} from "uuid";
import {TodolistsMap} from "./Components/Map/TodolistsMap";

function App() {
    const todolist1 = v1()
    const todolist2 = v1()
    const todolist3 = v1()

    const [tasks, setTasks] = useState<TaskStateType>({
            [todolist1]: [{id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false}],
            [todolist2]: [{id: v1(), title: "Hello world", isDone: false},
                {id: v1(), title: "Milk", isDone: false},
                {id: v1(), title: "Bread", isDone: false}],
            [todolist3]: [{id: v1(), title: "Helmet", isDone: true},
                {id: v1(), title: "Wheels", isDone: false},
                {id: v1(), title: "Crank", isDone: false}]
        }
    )
    const [todolists, setTodolists] = useState<Array<TodolitsType>>([
        {id: todolist1, title: 'What to learn?', filter: 'all'},
        {id: todolist2, title: 'What to buy?', filter: 'all'},
        {id: todolist3, title: 'What to fixie?', filter: 'all'}
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

    const changeTaskStatus = (id: string, isDone: boolean, todolistID: string) => setTasks({
        ...tasks,
        [todolistID]: tasks[todolistID].map(m => m.id === id ? {...m, isDone} : m)
    })

    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter(f => f.id !== todolistID))
        delete tasks[todolistID]
        setTasks({...tasks})
    }

    return <TodolistsMap todolists={todolists}
                  tasks={tasks}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  addTask={addTask}
                  changeTaskStatus={changeTaskStatus}
                  removeTodolist={removeTodolist}/>

    // return (
    //     <div className="App">
    //         {todolists.map(todo => {
    //             let tasksForRender = tasks[todo.id]
    //             if (todo.filter === 'active') {
    //                 tasksForRender = tasks[todo.id].filter(f => !f.isDone)
    //             }
    //             if (todo.filter === 'complited') {
    //                 tasksForRender = tasks[todo.id].filter(f => f.isDone)
    //             }
    //             return <Todolist key={todo.id}
    //                              todolistID={todo.id}
    //                              title={todo.title}
    //                              tasks={tasksForRender}
    //                              removeTask={removeTask}
    //                              changeFilter={changeFilter}
    //                              addTask={addTask}
    //                              changeTaskStatus={changeTaskStatus}
    //                              filter={todo.filter}
    //                              removeTodolist={removeTodolist}/>
    //         })}
    //     </div>
    // );
}

export default App;
