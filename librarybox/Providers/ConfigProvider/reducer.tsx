import {  IConfigStateContext } from "./context";
import { ConfigActionEnums } from "./actions";

export function ConfigReducer(incomingState:IConfigStateContext,action:ReduxActions.Action<IConfigStateContext>):IConfigStateContext{
    // const {type,payload}= action;
   
    switch(ConfigActionEnums.Config){ 
        
        case ConfigActionEnums.Config:
    
                return {
                    ...action.payload
                }
                
        default:
            return incomingState;
    }
}