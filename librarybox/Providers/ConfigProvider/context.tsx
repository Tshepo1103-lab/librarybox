import {createContext} from 'react';


export interface IConfig{ 
  name:string;
  welcomeMessage:string;
  address:string; 
  primaryColor:string;
  secondaryColor:string; 
  EmailAddress:string;
  Contact:string;
  aboutMessage:string;
  }

export const INITIAL_STATE:IConfigStateContext={FetchConfig:[]};

export interface IConfigStateContext{
     FetchConfig?:IConfig[];
}

export interface IConfigActionStateContext{
    fetchConfig?:()=>void;
}

const ConfigContext = createContext<IConfigStateContext>(INITIAL_STATE);

const ConfigActionContext = createContext<IConfigActionStateContext>({});

export{ConfigContext,ConfigActionContext};