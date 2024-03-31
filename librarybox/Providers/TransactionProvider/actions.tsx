import { createAction } from "redux-actions";
import { ITransaction,ITransactionStateContext } from "./context";

export enum TransactionActionEnum{
   
    createTransactionRequest="CREATE",
    
}

export const createTransactionRequestAction=createAction<ITransactionStateContext,ITransaction>(TransactionActionEnum.createTransactionRequest,(CreateTransaction)=>({CreateTransaction}));
