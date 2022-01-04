import {TaskStateType, Todolist, TodolitsType} from "../Todolist/Todolist";
import React from "react";
import {useSelector} from "react-redux";
import {rootReducerType} from "../State/store";

// export const TodolistsMapMemo = () => {
//
//     const [id,setId]=useState<string>('')
//     const getId=(id:string)=>setId(id)
//
//     const tasks = useSelector<rootReducerType, TaskStateType>(state => state.tasks)
//     const todolists = useSelector<rootReducerType, Array<TodolitsType>>(state => state.todolists)
//
//
//     const thingToRender = useMemo(() => {
//         return <> {todolists.map(todo => {
//
//
//
//
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
//                              filter={todo.filter}
//             />
//         })}
//         </>
//     }, []);
//     return <> {thingToRender}</>
// }

export const TodolistsMapMemo = () => {

    const tasks = useSelector<rootReducerType, TaskStateType>(state => state.tasks)
    const todolists = useSelector<rootReducerType, Array<TodolitsType>>(state => state.todolists)

    return <> {todolists.map(todo => {
        debugger;

        let tasksForRender = tasks[todo.id]
        if (todo.filter === 'active') {
            tasksForRender = tasks[todo.id].filter(f => !f.isDone)
        }
        if (todo.filter === 'complited') {
            tasksForRender = tasks[todo.id].filter(f => f.isDone)
        }
        return <Todolist key={todo.id}
                         todolistID={todo.id}
                         title={todo.title}
                         tasks={tasksForRender}
                         filter={todo.filter}
        />
    })}
    </>
}
export const TodolistsMap = React.memo(TodolistsMapMemo)

// {
//
//     const tasks = useSelector<rootReducerType, TaskStateType>(state => state.tasks)
//     const todolists = useSelector<rootReducerType, Array<TodolitsType>>(state => state.todolists)
//
//     return <> {todolists.map(todo => {
//         let tasksForRender = tasks[todo.id]
//         if (todo.filter === 'active') {
//             tasksForRender = tasks[todo.id].filter(f => !f.isDone)
//         }
//         if (todo.filter === 'complited') {
//             tasksForRender = tasks[todo.id].filter(f => f.isDone)
//         }
//         return <Todolist key={todo.id}
//                          todolistID={todo.id}
//                          title={todo.title}
//                          tasks={tasksForRender}
//                          filter={todo.filter}
//         />
//     })}
//     </>
// }