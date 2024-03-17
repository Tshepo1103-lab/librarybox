import {createContext} from 'react';


export interface ILogin{
    userNameOrEmailAddress: string,
    password: string,
    id: string 
  } 
  export interface IUser {
    id: string;
    userName: string;
    name: string;
    surname: string;
    phoneNumber: string;
    emailAddress: string;
    password: string;
  }
export const LoginActionContext=createContext({});
export const LoginStateContext=createContext({})

export interface IUserStateContext {
    readonly UserLogin? : ILogin;
   
    
}
export const INITIAL_STATE: IUserStateContext={}
export interface IUserActionContext{
    loginUser?:(payload:ILogin) => void;
   
}

const UserContext = createContext<IUserStateContext>(INITIAL_STATE);

const UserActionContext = createContext<IUserActionContext>;
