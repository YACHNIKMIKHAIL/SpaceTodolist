import React, {useCallback} from 'react';
import './App.css';
import {v1} from "uuid";
import {TodolistsMap} from "./Components/Map/TodolistsMap";
import {AddForm} from "./Components/AddForm/AddForm";
import {AppBar, Button, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {Home} from '@mui/icons-material';
import styled from "styled-components";
import img from './Components/Images/wallpaperflare.com_wallpaper.jpg'
import {
    addNewTodoAC
} from "./Components/State/TasksReducer";
import {
    AddTodoAC
} from "./Components/State/TodolistReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./Components/State/store";
import {TodolitsType} from "./Components/Todolist/Todolist";

function App() {
    console.log('App render')
    const dispatch = useDispatch()
    const todolists = useSelector<rootReducerType, Array<TodolitsType>>(state => state.todolists)

    // const addTodolist = (title: string) => {
    //     const newTodolistId = v1()
    //     dispatch(AddTodoAC(title, newTodolistId))
    //     dispatch(addNewTodoAC(newTodolistId))
    // }
    const addTodolist = useCallback((title: string) => {
        const newTodolistId = v1()
        dispatch(AddTodoAC(title, newTodolistId))
        dispatch(addNewTodoAC(newTodolistId))
    }, [todolists])

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
                <TodolistsMap/>
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