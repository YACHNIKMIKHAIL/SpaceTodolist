type InitialAppSpaceType = {
    status: 'idle' | 'loading' | 'succesed' | 'failed'
    error: string | null
}
const initialAppState: InitialAppSpaceType = {
    status: 'idle',
    error: null
}
export const appSpaceReducer = (state = initialAppState, action: AppSpaceAction): InitialAppSpaceType => {
    switch (action.type) {
        case'APP/SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'APP/SET_ERROR': {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}
type AppSpaceAction = any
