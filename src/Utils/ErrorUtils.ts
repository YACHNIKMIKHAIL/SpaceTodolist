import {AppSpaceAction, setAppErrorAC, setAppStatusAC} from "../App/AppReducer";
import {RespType} from "../API/SpaceAPI";
import {SpaceThunksType} from "../App/store";
import {Dispatch} from "redux";

export const handleServerAppError = <T>(data: RespType<T>, dispatch: Dispatch<AppSpaceAction>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some spaceShit was happen !'))
    }
    dispatch(setAppStatusAC('failed'))
}
//export const handleServerNetworkAppError = ()
