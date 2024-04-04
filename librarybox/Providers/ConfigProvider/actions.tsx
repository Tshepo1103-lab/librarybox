import { createAction } from "redux-actions";
import { IConfig, IConfigStateContext } from "./context";

export enum ConfigActionEnums{
    Config="CONFIG"

}

export const ConfigAction=createAction<IConfigStateContext,IConfig[]>(ConfigActionEnums.Config,(FetchConfig)=>({FetchConfig}))