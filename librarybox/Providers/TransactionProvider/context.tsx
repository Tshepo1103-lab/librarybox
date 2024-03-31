import { createContext } from "react";

export interface ITransaction{
    CheckOutDate:Date;
    DueDate:Date;
    ReturnedDate:Date | null;
    BookId:string | undefined;
    UserId:string;
}

export const INITIAL_STATE:ITransactionStateContext={};

export interface ITransactionStateContext{
    readonly CreateTransaction?: ITransaction; 

}

export interface ITransactionActionContext{
    createtransaction?:(payload:ITransaction) => void;
    
}

const TransactionContext = createContext<ITransactionStateContext>(INITIAL_STATE);

const TransactionActionContext = createContext<ITransactionActionContext>({});

export {TransactionContext,TransactionActionContext};