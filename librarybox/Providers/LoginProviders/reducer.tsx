import {handleActions } from "redux-actions"; 
import { LoginActionEnums } from './actions';


export const loginReducer=handleActions(
    {
        [LoginActionEnums.LOGIN]:(state,action)=>({
            ...state,
            ...action.payload
        })  
    },{}
)