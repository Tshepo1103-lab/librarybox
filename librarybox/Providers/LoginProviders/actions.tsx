import { createAction } from "redux-actions";
import { ILogin,IUser,IUserStateContext } from "./context";

export enum UserActionEnum{
    loginUserRequest = 'LOGIN',
    createUserRequest="CREATE",
    getUserDetailsRequest="GET_USER",
    logOutUserRequest = 'LOGOUT',
    setCurrentUserRequest = 'SET_CURRENT_USER',
    getUserIdDetailsRequest = 'GET_USER_ID',
}

export const loginUserRequestAction = createAction<IUserStateContext, ILogin>(UserActionEnum.loginUserRequest,(UserLogin)=>({UserLogin}))
export const createUserRequestAction=createAction<IUserStateContext,IUser>(UserActionEnum.createUserRequest,(CreateUser)=>({CreateUser}));
export const getUserDetailsRequestAction = createAction<IUserStateContext, number>(UserActionEnum.getUserDetailsRequest,(id)=>({}));
export const logOutUserRequestAction = createAction<IUserStateContext>(UserActionEnum.logOutUserRequest,()=>({}))
export const setCurrentUserRequestAction = createAction<IUserStateContext, IUser>(UserActionEnum.setCurrentUserRequest,(currentUser)=>({currentUser}))
export const getUserIdDetailsRequestAction = createAction<IUserStateContext, number>(UserActionEnum.getUserIdDetailsRequest, (userId) => ({ userId }));