import { createAction } from "redux-actions";
import { IBookStateContext, ICategory, IShelf } from "./context";

export enum BookActionEnums{
    Shelf="SHELF",
    Category="CATEGORY"
}

export const BookRequestAction = createAction<IBookStateContext, IShelf[]>(BookActionEnums.Shelf,(BookShelf)=>({BookShelf}))
export const CategoryAction=createAction<IBookStateContext,ICategory[]>(BookActionEnums.Category,(BookCategory)=>({BookCategory}))
