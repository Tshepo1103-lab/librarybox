import {createContext} from 'react';


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

export const INITIAL_STATE:ITopStateContext={};

export interface ITopStateContext{
    readonly FetchTopchoice?:IBook[];
}

export interface ITopActionStateContext{
    fetchTopChoice?:()=>void;
}

const TopContext = createContext<ITopStateContext>(INITIAL_STATE);

const TopActionContext = createContext<ITopActionStateContext>({});

export{TopContext,TopActionContext};