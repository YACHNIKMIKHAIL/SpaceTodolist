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
export const todolistsSpaceApi={
    async getTodolists(){
        return await spaceInstance.get<SpaceTodolistType[]>(`/todo-lists`)
    }
}