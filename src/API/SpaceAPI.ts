import axios, {AxiosResponse} from "axios";

const spaceInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers:
        {"API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"}
})
export type SpaceTodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}
type RespType<D = {}> = {
    data: D,
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}
export const todolistsSpaceApi = {
    async getTodolists() {
        return await spaceInstance.get<SpaceTodolistType[]>(`/todo-lists`)
    },
    async createTodolist(title: string) {
        return await spaceInstance.post<RespType<{ item: SpaceTodolistType }>,
            AxiosResponse<RespType<{
                item: SpaceTodolistType
            }>>, { title: string }>(`/todo-lists`, {title})
    },
    async deleteTodolist(todolistId: string) {
        return await spaceInstance.delete<RespType>(`/todo-lists/${todolistId}`)
    },
    async updateTodolist(todolistId: string, title: string) {
        return await spaceInstance.put<RespType<{ item: SpaceTodolistType }>,
            AxiosResponse<RespType<{
                item: SpaceTodolistType
            }>>, { title: string }>(`/todo-lists/${todolistId}`, {title})
    }
}

export type SpaceTaskType = {
    id: string,
    title: string,
    description: string | null,
    todoListId: string,
    order: number,
    status: number,
    priority: number,
    startDate: string | null,
    deadline: string | null,
    addedDate: string
}
type GetSpaceTasksType = {
    items: SpaceTaskType[],
    totalCount: number,
    error: string | null
}
type CreateSpaceResponceType = {
    data: {
        item: SpaceTaskType
    },
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}
export const tasksSpaceApi = {
    async getTasks(todolistId: string) {
        return await spaceInstance.get<GetSpaceTasksType>(`/todo-lists/${todolistId}/tasks`)
    },
    async createTask(todolistId: string, title: string) {
        return await spaceInstance.post<CreateSpaceResponceType>(`/todo-lists/${todolistId}/tasks`, {title})
    }
}