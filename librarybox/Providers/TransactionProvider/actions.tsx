import { createAction } from "redux-actions";
import { ITransaction,ITransactionStateContext } from "./context";

export enum TransactionActionEnum{
   
    createTransactionRequest="CREATE",
    FetchTransactionRequest="FETCH"
    
}

export const createTransactionRequestAction=createAction<ITransactionStateContext,ITransaction>(TransactionActionEnum.createTransactionRequest,(CreateTransaction)=>({CreateTransaction}));
export const FetchTransactionRequestAction= createAction<ITransactionStateContext, ITransaction[]>(TransactionActionEnum.FetchTransactionRequest, (FetchTransaction) => ({FetchTransaction}));