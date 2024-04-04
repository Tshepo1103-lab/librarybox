import { createAction } from "redux-actions";
import { IBook, ITopStateContext } from "./context";

export enum TopActionEnums{
    TopChoice="TOP"

}

export const TopChoiceAction=createAction<ITopStateContext,IBook[]>(TopActionEnums.TopChoice,(FetchTopchoice)=>({FetchTopchoice}))