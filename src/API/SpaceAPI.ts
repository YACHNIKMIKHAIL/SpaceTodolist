import axios from "axios";

const spaceInstance=axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers:
        {"API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"}
})

export type SpaceTodolistType={
    id: string,
    title: string,
    addedDate: string,
    order: number
}
type postSpaceType={
    data: {
        item: SpaceTodolistType
    },
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}
type delSpaceType ={
    data: {},
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}
export const todolistsSpaceApi={
    async getTodolists(){
        return await spaceInstance.get<SpaceTodolistType[]>(`/todo-lists`)
    },
    async createTodolist(title:string){
        return await spaceInstance.post<postSpaceType>(`/todo-lists`,{title})
    },
    async deleteTodolist(todolistId:string){
        return await  spaceInstance.delete<delSpaceType>(`/todo-lists/${todolistId}`)
    }
}