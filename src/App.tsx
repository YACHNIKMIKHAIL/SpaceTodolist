import React, {useState} from 'react';
import './App.css';
import {FilterValueType, TaskStateType, Todolist, TodolitsType} from './Components/Todolist/Todolist';
import {v1} from "uuid";

function App() {
    const todolist1 = v1()
    const todolist2 = v1()

    const [tasks, setTasks] = useState<TaskStateType>({
            [todolist1]: [{id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false}],
            [todolist2]: [{id: v1(), title: "Hello world", isDone: true},
                {id: v1(), title: "I am Happy", isDone: false},
                {id: v1(), title: "Yo", isDone: false}]
        }
    )
    const [todolists, setTodolists] = useState<Array<TodolitsType>>([
        {id: todolist1, title: 'What to learn?', filter: 'all'},
        {id: todolist2, title: 'What to buy?', filter: 'all'}
    ])

    const removeTask = (id: string, todolistID: string) => {
        let todolistTasks = tasks[todolistID]
        tasks[todolistID] = todolistTasks.filter(f => f.id !== id)
        setTasks({...tasks})
    }

    const changeFilter = (filter: FilterValueType, todolistID: string) => {
        let todolist = todolists.find(f => f.id === todolistID)
        if (todolist) {
            todolist.filter = filter
            setTodolists([...todolists])
        }
    }

    const addTask = (title: string, todolistID: string) => {
        let task = {id: v1(), title: title, isDone: false}
        let todolistTasks = tasks[todolistID]
        tasks[todolistID] = [task, ...todolistTasks]
        setTasks({...tasks})

    }
    const changeTaskStatus = (id: string, isDone: boolean, todolistID: string) => {
        let task = tasks[todolistID].find(f => f.id === id)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }
    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter(f => f.id !== todolistID))
        delete tasks[todolistID]
        setTasks({...tasks})
    }


    return (
        <div className="App">
            {todolists.map(todo => {
                let tasksForRender = tasks[todo.id]
                if (todo.filter === 'active') {
                    tasksForRender = tasks[todo.id].filter(f => !f.isDone)
                }
                if (todo.filter === 'complited') {
                    tasksForRender = tasks[todo.id].filter(f => f.isDone)
                }
                return <Todolist key={todo.id}
                                 todolistID={todo.id}
                                 title="What to learn"
                                 tasks={tasksForRender}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeTaskStatus}
                                 filter={todo.filter}
                                 removeTodolist={removeTodolist}/>
            })}
        </div>
    );
}

export default App;
