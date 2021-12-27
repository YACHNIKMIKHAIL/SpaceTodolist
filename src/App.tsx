import React, {useReducer, useState} from 'react';
import './App.css';
import {FilterValueType, TaskStateType, TodolitsType} from './Components/Todolist/Todolist';
import {v1} from "uuid";
import {TodolistsMap} from "./Components/Map/TodolistsMap";
import {AddForm} from "./Components/AddForm/AddForm";
import {AppBar, Button, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {Home} from '@mui/icons-material';
import styled from "styled-components";
import img from './Components/Images/wallpaperflare.com_wallpaper.jpg'
import {
    addNewTodoAC,
    AddTaskAC,
    ChangeTaskStatusAC,
    changeTaskTitleAC,
    RemoveTaskAC,
    tasksReducer
} from "./Components/State/TasksReducer";
import {
    AddTodoAC,
    ChangeTodoFilterAC,
    ChangeTodoTitleAC,
    removeTodolistAC,
    todolistReducer
} from "./Components/State/TodolistReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./Components/State/store";

export const todolist1 = v1()
export const todolist2 = v1()
export const todolist3 = v1()
export const todolist4 = v1()
export const todolist5 = v1()
export const todolist6 = v1()
export const todolist7 = v1()
export const todolist8 = v1()
export const todolist9 = v1()

function App() {
    const dispatch = useDispatch()
    const todolists = useSelector<rootReducerType, Array<TodolitsType>>(state => state.todolists)
    const tasks = useSelector<rootReducerType, Array<TodolitsType>>(state => state.tasks)

    // const [tasks, dispatchTasks] = useReducer(tasksReducer,{
    //         [todolist1]: [{id: v1(), title: "HTML&CSS", isDone: true},
    //             {id: v1(), title: "JS", isDone: true},
    //             {id: v1(), title: "ReactJS", isDone: false}],
    //         [todolist2]: [{id: v1(), title: "Book", isDone: false},
    //             {id: v1(), title: "Milk", isDone: false},
    //             {id: v1(), title: "Bread", isDone: false}],
    //         [todolist3]: [{id: v1(), title: "Helmet", isDone: true},
    //             {id: v1(), title: "Wheels", isDone: false},
    //             {id: v1(), title: "Crank", isDone: false}],
    //         [todolist4]: [{id: v1(), title: "Тудулист", isDone: true},
    //             {id: v1(), title: "Нативочка", isDone: false},
    //             {id: v1(), title: "Чилл)))", isDone: false}],
    //         [todolist5]: [{id: v1(), title: "Домой вернуться", isDone: true},
    //             {id: v1(), title: "Игровая комната", isDone: true},
    //             {id: v1(), title: "В гости к маме)", isDone: false}],
    //         [todolist6]: [{id: v1(), title: "Чай", isDone: true},
    //             {id: v1(), title: "Чай", isDone: true},
    //             {id: v1(), title: "Чай", isDone: false}],
    //         [todolist7]: [{id: v1(), title: "по обс-вам(", isDone: false},
    //             {id: v1(), title: "Выжить любой ценой", isDone: false},
    //             {id: v1(), title: "Попытаться кайфануть)", isDone: true}],
    //         [todolist8]: [{id: v1(), title: "Мульты", isDone: true},
    //             {id: v1(), title: "Сны", isDone: true},
    //             {id: v1(), title: "Ничё", isDone: false}],
    //         [todolist9]: [{id: v1(), title: "Цветы", isDone: false},
    //             {id: v1(), title: "Цветы", isDone: false},
    //             {id: v1(), title: "Цветы)", isDone: true}]
    //     }
    // )
    // const [todolists, dispatchTodolists] = useReducer(todolistReducer,[
    //     {id: todolist1, title: 'What to learn?', filter: 'all'},
    //     {id: todolist2, title: 'What to buy?', filter: 'all'},
    //     {id: todolist3, title: 'What to fixie?', filter: 'all'},
    //     {id: todolist4, title: 'C чего начать?', filter: 'all'},
    //     {id: todolist5, title: 'Куда сходить?', filter: 'all'},
    //     {id: todolist6, title: 'Что пить?', filter: 'all'},
    //     {id: todolist7, title: 'Как жить теперь?', filter: 'all'},
    //     {id: todolist8, title: 'Что позырить?', filter: 'all'},
    //     {id: todolist9, title: 'Что подарить?', filter: 'all'}
    // ])

    const removeTask = (id: string, todolistID: string) => dispatchTasks(RemoveTaskAC(id, todolistID))
    //     setTasks({
    //     ...tasks,
    //     [todolistID]: tasks[todolistID].filter(f => f.id !== id)
    // })
    const changeFilter = (filter: FilterValueType, todolistID: string) => {
        debugger
        dispatchTodolists(ChangeTodoFilterAC(filter, todolistID))
    }
    //     setTodolists(todolists.map(m => m.id === todolistID ? {
    //     ...m,
    //     filter: filter
    // } : m))

    const addTask = (title: string, todolistID: string) => dispatchTasks(AddTaskAC(title, todolistID))
    //     setTasks({
    //     ...tasks,
    //     [todolistID]: [{id: v1(), title: title, isDone: false}, ...tasks[todolistID]]
    // })

    const changeTaskStatus = (id: string, isDone: boolean, todolistID: string) => dispatchTasks(ChangeTaskStatusAC(id, isDone, todolistID))
    // {
    //     setTasks({
    //         ...tasks,
    //         [todolistID]: tasks[todolistID].map(m => m.id === id ? {...m, isDone} : m)
    //     })
    // }

    const removeTodolist = (todolistID: string) => dispatchTodolists(removeTodolistAC(todolistID))
    // {
    //     setTodolists(todolists.filter(f => f.id !== todolistID))
    //     delete tasks[todolistID]
    //     setTasks({...tasks})
    // }
    const addTodolist = (title: string) => {
        const newTodolistId = v1()
        dispatchTodolists(AddTodoAC(title, newTodolistId))
        dispatchTasks(addNewTodoAC(newTodolistId))
    }
    // {
    //     let newID = v1()
    //     let newTodolist: TodolitsType = {id: newID, title: title, filter: 'all'}
    //     setTodolists([newTodolist, ...todolists])
    //     setTasks({...tasks, [newTodolist.id]: []})
    // }
    const changeTaskTitle = (id: string, title: string, todolistId: string) => dispatchTasks(changeTaskTitleAC(id, title, todolistId))
    // {
    //     setTasks({...tasks, [todolistId]: tasks[todolistId].map(m => m.id === id ? {...m, title: title} : m)})
    // }
    const onChangeTodolistTitle = (title: string, todolistID: string) => dispatchTodolists(ChangeTodoTitleAC(title, todolistID))
    // {
    //     setTodolists(todolists.map(m => m.id === todolistID ? {...m, title} : m))
    // }

    return <AppCase>
        <AppBar position="static" style={{opacity: '0.7'}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <Home fontSize="large"/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Space Todolist
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <Container fixed>
            <Grid container style={{
                padding: '10px',
                backgroundColor: 'rgba(203, 209, 213,0.7)',
                margin: '10px',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <AddForm addItem={addTodolist}/>
            </Grid>
            <Grid container spacing={3}>
                <TodolistsMap todolists={todolists}
                              tasks={tasks}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeTaskStatus}
                              removeTodolist={removeTodolist}
                              changeTaskTitle={changeTaskTitle}
                              onChangeTodolistTitle={onChangeTodolistTitle}/>
            </Grid>
        </Container>
    </AppCase>
}

export default App;

const AppCase = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  overflow: auto;
`