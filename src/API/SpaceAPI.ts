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
export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Complited = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    High = 2,
    Urgently = 3,
    Later = 4
}
export type SpaceTaskType = {
    id: string,
    title: string,
    description: string | null,
    todoListId: string,
    order: number,
    status: TaskStatuses,
    priority: TaskPriorities,
    startDate: string | null,
    deadline: string | null,
    addedDate: string
}
type GetSpaceTasksType = {
    items: SpaceTaskType[],
    totalCount: number,
    error: string | null
}
type ResponseSpaceTasksType<S = {}> = {
    data: S,
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}
export const tasksSpaceApi = {
    async getTasks(todolistId: string) {
        return await spaceInstance.get<GetSpaceTasksType>(`/todo-lists/${todolistId}/tasks`)
    },
    async createTask(todolistId: string, title: string) {
        return await spaceInstance.post<RespType<{ item: SpaceTaskType }>,
            AxiosResponse<RespType<{
                item: SpaceTaskType
            }>>, { title: string }>(`/todo-lists/${todolistId}/tasks`, {title})
    },
    async deleteTask(todolistId: string, taskId: string) {
        return await spaceInstance.delete<ResponseSpaceTasksType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
    },
    async updateTask(todolistId: string, taskId: string, model:SpaceTaskType) {
        return await spaceInstance.put<RespType<{ item: SpaceTaskType }>,
            AxiosResponse<RespType<{
                item: SpaceTaskType
            }>>, { title: string, status?: number }>(`/todo-lists/${todolistId}/tasks/${taskId}`, model)
    }
}
