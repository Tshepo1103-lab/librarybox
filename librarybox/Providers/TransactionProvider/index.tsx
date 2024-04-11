import { FC, PropsWithChildren, useContext, useReducer } from "react";
import { instance } from "../axiosInstance";
import { INITIAL_STATE, ITransaction, ITransactionActionContext, ITransactionStateContext, TransactionActionContext, TransactionContext } from "./context";
import { TransactionReducer } from "./reducer";
import { FetchTransactionRequestAction, createTransactionRequestAction } from "./actions";
import { message } from "antd";

const TransactionProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [status, dispatch] = useReducer(TransactionReducer, INITIAL_STATE);

    const createtransaction = async (payload: ITransaction) => {
        try {
            const response = await instance.post('https://localhost:44311/api/services/app/Transaction/Create', payload);
            if (response.data.success) {
                message.success("Transaction successfully created");
                dispatch(createTransactionRequestAction(response.data.result));
            } else {
                message.error("Failed to transact the book");
            }
            
        } catch (error:any) {
            message.error(error.response.data.error.message)
            
           
        }
    };
    const fetchtransaction = async (id:number) =>{
        try{
            const response = await instance.get(`https://localhost:44311/api/services/app/Transaction/GetAllIncluding?userId=${id}`)
            if (response.data.success) {
                message.success("Fetched successfully");
                dispatch(FetchTransactionRequestAction(response.data.result));
            } else {
                message.error("Failed");
            }
        }
        catch(error:any){
            message.error(error.response.data.error.message)
        }
    }

    return (
        <TransactionContext.Provider value={status}>
            <TransactionActionContext.Provider value={{createtransaction,fetchtransaction}}>
                {children}
            </TransactionActionContext.Provider>
        </TransactionContext.Provider>
    );
};

const useTransactionState = (): ITransactionStateContext => {
    const context = useContext(TransactionContext);
    if (!context) {
        throw new Error("useTransactionState must be used within a TransactionProvider");
    }
    return context;
};

const useTransactionActions = (): ITransactionActionContext => {
    const context = useContext(TransactionActionContext);
    if (!context) {
        throw new Error("useTransactionActions must be used within a TransactionProvider");
    }
    return context;
};

const useTransaction = (): ITransactionStateContext & ITransactionActionContext => {
    return {
        ...useTransactionState(),
        ...useTransactionActions()
    };
};

export { TransactionProvider, useTransaction, useTransactionState, useTransactionActions };
