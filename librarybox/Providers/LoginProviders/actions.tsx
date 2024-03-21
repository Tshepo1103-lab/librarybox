import { createAction } from "redux-actions";
import React from 'react';
import { IUser,IUserStateContext } from "./context";

export enum UserActionEnum{
    createUserRequest="CREATE",
    getUserDetailsRequest="GET_USER"
}

export const createUserRequestAction=createAction<IUserStateContext,IUser>(UserActionEnum.createUserRequest,(CreateUser)=>({CreateUser}));
export const getUserDetailsRequestAction = createAction<IUserStateContext, number>(UserActionEnum.getUserDetailsRequest,(id)=>({}));

