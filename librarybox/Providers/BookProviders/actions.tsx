import { createAction } from "redux-actions";
import { IBook, IBookStateContext, ICategory, IShelf } from "./context";

export enum BookActionEnums{
    Shelf="SHELF",
    Category="CATEGORY",
    Books="BOOKS"
}

export const BookRequestAction = createAction<IBookStateContext, IShelf[]>(BookActionEnums.Shelf,(BookShelf)=>({BookShelf}))
export const CategoryAction=createAction<IBookStateContext,ICategory[]>(BookActionEnums.Category,(BookCategory)=>({BookCategory}))
export const BooksAction=createAction<IBookStateContext,IBook[]>(BookActionEnums.Books,(CategoryBooks)=>({CategoryBooks}))