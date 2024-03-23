import {createContext} from 'react';

export interface IShelf{
    name:string;
}
export interface ICategory{
    name:string;
    shelfId:string;
}

export const INITIAL_STATE:IBookStateContext={};

export interface IBookStateContext{
    readonly BookShelf?:IShelf[];
    readonly BookCategory?:ICategory[];
}

export interface IBookActionStateContext{
    fetchShelf?:()=>void;
    fetchCategory?:()=>void;
}

const BookContext = createContext<IBookStateContext>(INITIAL_STATE);

const BookActionContext = createContext<IBookActionStateContext>({});

export {BookContext,BookActionContext};