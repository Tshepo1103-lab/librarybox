import {  ITopStateContext } from "./context";
import { TopActionEnums } from "./actions";

export function BookReducer(incomingState:ITopStateContext,action:ReduxActions.Action<ITopStateContext>):ITopStateContext{
    const {type,payload}= action;
    switch(type){  
        case TopActionEnums.TopChoice:
                return {...payload}
        default:
            return incomingState;
    }
}