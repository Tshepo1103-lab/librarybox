import { handleActions } from "redux-actions";
import { BookActionEnums } from "./actions";

export const bookReducer= handleActions(
    {
        [BookActionEnums.SHELF]:(state,action)=>({
            ...state,
            ...action.payload
        }),
        [BookActionEnums.CATEGORY]:(state,action)=>({
            ...state,
            ...action.payload
        })
     
    },{}
)