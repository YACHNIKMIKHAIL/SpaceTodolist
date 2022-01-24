import {rootReducerType} from "../Components/State/store";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {
    tasksReducer,
    todolist1,
    todolist2,
    todolist3,
    todolist4,
    todolist5, todolist6, todolist7, todolist8,
    todolist9
} from "../Components/State/TasksReducer";
import {v1} from "uuid";
import {todolistReducer} from "../Components/State/TodolistReducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistReducer
})

const initialGlobalState = {
    todolists: [
        {id: todolist1, title: 'What to learn?', filter: 'all'},
        {id: todolist2, title: 'What to buy?', filter: 'all'},
        {id: todolist3, title: 'What to fixie?', filter: 'all'},
        {id: todolist4, title: 'C чего начать?', filter: 'all'},
        {id: todolist5, title: 'Куда сходить?', filter: 'all'},
        {id: todolist6, title: 'Что пить?', filter: 'all'},
        {id: todolist7, title: 'Как жить теперь?', filter: 'all'},
        {id: todolist8, title: 'Что позырить?', filter: 'all'},
        {id: todolist9, title: 'Что подарить?', filter: 'all'}
    ] ,
    tasks: {
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
};
export const storyBookStore = createStore(rootReducer, initialGlobalState as rootReducerType);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}> {storyFn()} </Provider>
}