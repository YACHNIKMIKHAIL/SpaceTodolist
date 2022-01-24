import {rootReducerType} from "../Components/State/store";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {tasksReducer} from "../Components/State/TasksReducer";
import {v1} from "uuid";
import {todolistReducer} from "../Components/State/TodolistReducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistReducer
})

const initialGlobalState = {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
};
export const storyBookStore = createStore(rootReducer, initialGlobalState as rootReducerType);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}> {storyFn()} </Provider>
}