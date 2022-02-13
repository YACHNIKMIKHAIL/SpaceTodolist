import {appSpaceReducer, InitialAppSpaceType, setAppErrorAC, setAppStatusAC} from "./AppReducer";

let startState: InitialAppSpaceType
beforeEach(() => {
    startState = {
        status: 'idle',
        error: null
    }
})
test('correct error message should be set', () => {
    const endState = appSpaceReducer(startState, setAppErrorAC('some error!'))

    expect(endState.error).toBe('some error!')
    expect(endState.status).toBe('idle')
})
test('correct status  should be set', () => {
    const endState = appSpaceReducer(startState, setAppStatusAC('loading'))

    expect(endState.error).toBe(null)
    expect(endState.status).toBe('loading')
})