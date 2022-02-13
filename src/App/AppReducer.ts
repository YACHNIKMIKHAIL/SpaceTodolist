const initialAppState: InitialAppSpaceType = {
    status: 'idle',
    error: null
}
export const appSpaceReducer = (state = initialAppState, action: AppSpaceAction): InitialAppSpaceType => {
    switch (action.type) {
        case APP_SET_STATUS: {
            return {...state, status: action.status}
        }
        case APP_SET_ERROR: {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}
export type RequestStatusType ='idle' | 'loading' | 'succesed' | 'failed'
export type InitialAppSpaceType = {
    status: RequestStatusType
    error: string | null
}

export type AppSpaceAction = ReturnType<typeof setErrorAC> | ReturnType<typeof setStatusAC>
const APP_SET_ERROR = 'APP_SET_ERROR'
export const setErrorAC = (error: string | null) => {
    return {type: APP_SET_ERROR, error} as const
}
const APP_SET_STATUS = 'APP_SET_STATUS'
export const setStatusAC = (status: RequestStatusType ) => {
    return {type: APP_SET_STATUS, status} as const
}