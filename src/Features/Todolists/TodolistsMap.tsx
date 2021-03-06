import {Todolist} from "./Todolist/Todolist";
import React from "react";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../App/store";
import {TodolitsType} from "./Todolist/Reducers/TodolistReducer";

export const TodolistsMapMemo = () => {
    const todolists = useSelector<rootReducerType, Array<TodolitsType>>(state => state.todolists)

    return <> {todolists.map(todo => {

        return <Todolist key={todo.id}
                         todolistID={todo.id}
        />
    })}
    </>
}
export const TodolistsMap = React.memo(TodolistsMapMemo)