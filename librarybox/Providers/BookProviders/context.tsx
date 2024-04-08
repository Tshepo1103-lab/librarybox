import {createContext} from 'react';

export interface IShelf{
    id:string;
    name:string;
}
export interface ICategory{
    id:string;
    name:string;
    shelfId:string;
}

export interface Ifilter{
    filterby?:string;
    filtervalue?:string;
}
export interface IBook{
  id:string;
  isbn: string;
  title: string;
  description: string;
  authors: string[];
  quantity: number;
  url: string;
  categoryId: string;
}

export const INITIAL_STATE:IBookStateContext={};

export interface IBookStateContext{
    readonly BookShelf?:IShelf[];
    readonly BookCategory?:ICategory[];
    readonly CategoryBooks?:IBook[];
    readonly SearchBooks?:IBook[];
   
}

export interface IBookActionStateContext{
    fetchShelf?:()=>void;
    fetchCategory?:(payload:string)=>void;
    fetchBooks?:(payload:string)=>void;
    searchBooks?:(payload:Ifilter)=>void;
   
}

const BookContext = createContext<IBookStateContext>(INITIAL_STATE);

const BookActionContext = createContext<IBookActionStateContext>({});

export {BookContext,BookActionContext};