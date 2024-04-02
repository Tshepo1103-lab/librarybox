import { TransactionActionEnum } from "./actions";
import { ITransactionStateContext } from "./context";

export function TransactionReducer(incomingState: ITransactionStateContext, action: ReduxActions.Action<ITransactionStateContext>): ITransactionStateContext {

    const { type, payload } = action;

    switch (type) { 
      
        case TransactionActionEnum.createTransactionRequest:
            return { ...incomingState, ...payload };
        case TransactionActionEnum.FetchTransactionRequest:
            return { ...incomingState, ...payload };
       
        default:
            return incomingState;
    }
}