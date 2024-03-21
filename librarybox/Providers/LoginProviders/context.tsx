import {createContext} from 'react';


// export interface ILogin{
//     userNameOrEmailAddress: string,
//     password: string,
//     id: string 
//   } 
  export interface IUser {
    id: string;
    userName: string;
    name: string;
    surname: string;
    phoneNumber: string;
    emailAddress: string;
    password: string;

  }

export const INITIAL_STATE: IUserStateContext={}

export interface IUserStateContext {
    readonly CreateUser? : IUser; 
    readonly user?: IUser;
}


export interface IUserActionContext{
    createUser?:(payload:IUser) => void;
    getUserDetails?:(id:number) => void
}

const UserContext = createContext<IUserStateContext>(INITIAL_STATE);

const UserActionContext = createContext<IUserActionContext>({});

export {UserContext,UserActionContext};
