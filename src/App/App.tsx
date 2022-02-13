import React, {useCallback, useEffect} from 'react';
import './App.css';
import {TodolistsMap} from "../Features/Todolists/TodolistsMap";
import {AddForm} from "../Components/AddForm/AddForm";
import {AppBar, Button, Container, Grid, IconButton, LinearProgress, Toolbar, Typography} from "@mui/material";
import {Home} from '@mui/icons-material';
import styled from "styled-components";
import img from '../Components/Images/wallpaperflare.com_wallpaper.jpg'
import {useDispatch, useSelector} from "react-redux";
import {createTodolistsTC, getTodolistsTC} from "../Features/Todolists/Todolist/Actions/TodolistsActions";
import {ErrorSnackbar} from '../Components/ErrorSnackbar/ErrorSnackbar';
import {rootReducerType} from "./store";
import {RequestStatusType} from "./AppReducer";

export const App = React.memo(() => {
    const dispatch = useDispatch()
    const spaceStatus = useSelector<rootReducerType, RequestStatusType>(state => state.app.status)

    const addTodolist = useCallback((title: string) => {
        dispatch(createTodolistsTC(title))
    }, [dispatch])

    useEffect(() => {
        dispatch(getTodolistsTC())
    }, [])

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

            {spaceStatus === 'loading' && <LinearProgress color="secondary"/>}

        </AppBar>
        <Container fixed style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
            <Grid container spacing={1} style={{display: 'flex', justifyContent: 'center'}}>
                <TodolistsMap/>
            </Grid>
        </Container>
        <ErrorSnackbar/>
    </AppCase>
})

const AppCase = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`