import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useReducer } from 'react';
import { message } from 'antd';
import { useGet, useMutate } from 'restful-react';
import { useRouter } from 'next/navigation';
import { UserReducer } from './reducer';
import {ILogin ,INITIAL_STATE, IUser, IUserActionContext, IUserStateContext, UserActionContext, UserContext } from './context';
import { createUserRequestAction,getUserDetailsRequestAction,logOutUserRequestAction,getUserIdDetailsRequestAction,loginUserRequestAction} from './actions';


const UserProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    const { push } = useRouter();
  
    const { mutate: loginUserHttp } = useMutate({
      path: `${process.env.NEXT_PUBLIC_PASS}/TokenAuth/Authenticate`,
      verb: 'POST',
    });
    
    const { mutate: createUserHttp } = useMutate({
      path: `${process.env.NEXT_PUBLIC_PASS}/services/app/Person/Create`,
      verb: 'POST',

    });
  
  
  
  
    const loginUser = async (payload: ILogin) => {
      try {
        const response = await loginUserHttp(payload);
        if (response.success) {
          localStorage.setItem('token', response.result.accessToken);
          dispatch(loginUserRequestAction(response.result));
          dispatch(getUserIdDetailsRequestAction(response.result.userId));
          if (response.result.userId === 1) {
            push("/");
            console.log("User ID:", response.result.userId);
            message.success('Login successful');
          } else {
            push("/");
            console.log("User ID:", response.result.userId);
            message.success('Login successful');
          }
        } else {
          message.error('Invalid username or password');
        }
      } catch (error) {
        console.log(error);
        message.error('Login failed');
      }
    };
  
    const createUser = async (payload: IUser) => {
      console.log("response::", payload);
      try {
        const response = await createUserHttp(payload);
        console.log("response::", response);
        if (response.success) {
          message.success("User successfully created");
          dispatch(createUserRequestAction(response.result));
          push("/login");
        } else {
          message.error("Failed to create user");
        }
      } catch (error) {
        console.error("User creation error:", error);
        message.error("username or name already in use");
      }
    };
  
    const getUserDetails = async (id: number) => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_PASS}/services/app/User/Get?Id=${id}`, {
          method: 'GET',
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
        });
        const data = await response.json();
        dispatch(getUserDetailsRequestAction(data.result.id));
        dispatch(getUserIdDetailsRequestAction(data.result));
      } catch (error) {
        console.log(error);
        message.error("Failed to get user details");
      }
    };
  
    const logOutUser = () => {
      dispatch(logOutUserRequestAction());
      localStorage.removeItem('token');
      push('/login');
    };
  
    return (
      <UserContext.Provider value={state}>
        <UserActionContext.Provider value={{loginUser ,createUser ,getUserDetails, logOutUser}}>
          {children}
        </UserActionContext.Provider>
      </UserContext.Provider>
    );
  };
  
  const useLoginState = (): IUserStateContext => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useLoginState must be used within a UserProvider");
    }
    return context;
  };
  
  const useLoginActions = (): IUserActionContext => {
    const context = useContext(UserActionContext);
    if (!context) {
      throw new Error("useLoginActions must be used within a UserProvider");
    }
    return context;
  };
  
  const useUser = (): IUserStateContext & IUserActionContext => {
    return {
      ...useLoginState(),
      ...useLoginActions()
    };
  };
  
  export { UserProvider, useUser };