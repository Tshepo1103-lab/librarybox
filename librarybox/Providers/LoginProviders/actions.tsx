import { createAction } from "redux-actions";

export const LoginActionEnums={
    LOGIN:"LOGIN",
}

export const LoginAction=createAction(
LoginActionEnums.LOGIN,
    (payload:string)=>payload

)
