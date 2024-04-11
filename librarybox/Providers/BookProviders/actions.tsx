import { createAction } from "redux-actions";
import { IBook, IBookStateContext, ICategory, IShelf, Ifilter } from "./context";

export enum BookActionEnums{
    Shelf="SHELF",
    Category="CATEGORY",
    Books="BOOKS",
    TopChoice="TOP",
    Search="SEARCH",
    FetchBook="FETCHBOOK"

}

export const BookRequestAction = createAction<IBookStateContext, IShelf[]>(BookActionEnums.Shelf,(BookShelf)=>({BookShelf}))
export const CategoryAction=createAction<IBookStateContext,ICategory[]>(BookActionEnums.Category,(BookCategory)=>({BookCategory}))
export const BooksAction=createAction<IBookStateContext,IBook[]>(BookActionEnums.Books,(CategoryBooks)=>({CategoryBooks}))
export const SearchAction=createAction<IBookStateContext,IBook[]>(BookActionEnums.Search,(SearchBooks)=>({SearchBooks}))
export const FetchBookAction=createAction<IBookStateContext,IBook>(BookActionEnums.FetchBook,(FetchBook)=>({FetchBook}))