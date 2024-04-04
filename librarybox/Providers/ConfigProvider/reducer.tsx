import {  IConfigStateContext } from "./context";
import { ConfigActionEnums } from "./actions";

export function ConfigReducer(incomingState:IConfigStateContext,action:ReduxActions.Action<IConfigStateContext>):IConfigStateContext{
    // const {type,payload}= action;
    console.log('in reducer', incomingState);

    switch(ConfigActionEnums.Config){ 
        
        case ConfigActionEnums.Config:
            console.log("in case???",action.payload);
                return {
                    ...action.payload
                }
                
        default:
            return incomingState;
    }
}