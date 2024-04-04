import { createContext } from "react";
import { IBook } from "../BookProviders/context";
import { IUser } from "../LoginProviders/context";

export interface ITransaction{
    checkOutDate?:string;
    dueDate?:string;
    returnedDate?:string | null;
    bookId?:string | undefined;
    UserId?:string;
    book?:IBook;
    user?:IUser;
    status:number;
}


export const INITIAL_STATE:ITransactionStateContext={};

export interface ITransactionStateContext{
    readonly CreateTransaction?: ITransaction; 
    readonly FetchTransaction?: ITransaction[];

}

export interface ITransactionActionContext{
    createtransaction?:(payload:ITransaction) => void;
    fetchtransaction?:(payload:string) =>void;
    
}

const TransactionContext = createContext<ITransactionStateContext>(INITIAL_STATE);

const TransactionActionContext = createContext<ITransactionActionContext>({});

export {TransactionContext,TransactionActionContext};