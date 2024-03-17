import { loginReducer } from "./reducer";
import {useState,useEffect,useReducer,useContext, FC, PropsWithChildren} from 'react';
import { LoginActionContext,LoginStateContext } from "./context";
import { LoginAction } from "./actions";
import { ILogin } from "./context";
import {IUser,INITIAL_STATE, IUserActionContext, IUserStateContext,  } from './context';



const LoginProvider : FC<PropsWithChildren<{}>> = ({ children })=>{
    const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE)
    const getState=()=>({...state})

    const login = async (user: ILogin) => {
        try {
            const url = 'https://localhost:44311/api/TokenAuth/Authenticate';
            const body = {
                userNameOrEmailAddress: user.userNameOrEmailAddress,
                password: user.password,
                rememberClient: true,
            };
            const headers = {
                'Content-Type': 'application/json',
            };
    
            const response = await fetch(url, {
                headers,
                body: JSON.stringify(body),
                method: 'POST',
                mode: 'cors',
            });
    
            if (!response.ok) {
                throw new Error('Failed to authenticate');
            }
    
            const data = await response.json();
    
            return data;
        } catch (error) {
            console.log(error);
            throw error; // Propagate the error to the caller
        }
    }
    
    return(
        <LoginStateContext.Provider value={state}>
            <LoginActionContext.Provider value={login}>
                {children}
            </LoginActionContext.Provider>
        </LoginStateContext.Provider>
    )
}
const useLoginState = (): IUserStateContext => {
    const context = useContext(LoginStateContext);
    if (!context) {
      throw new Error("useLoginState must be used within a UserProvider");
    }
    return context;
  };
  
  const useLoginActions = (): IUserActionContext => {
    const context = useContext(LoginActionContext);
    if (!context) {
      throw new Error("useLoginActions must be used within a UserProvider");
    }
    return context;
  };
  const useUser = (): IUserStateContext & IUserActionContext => {
    const stateContext = useLoginState();
    const actionContext = useLoginActions();

    // Combine state and actions into a single object
    const userContext: IUserStateContext & IUserActionContext = {
        ...stateContext,
        ...actionContext
    };

    return userContext;
};

  export { LoginProvider, useUser };