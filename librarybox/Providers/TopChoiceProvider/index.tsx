import { useContext, useReducer, FC, PropsWithChildren} from "react"
import { BookReducer } from "./reducer";
import { ITopActionStateContext, ITopStateContext, INITIAL_STATE } from "./context";
import { TopChoiceAction } from "./actions";
import { TopActionContext,TopContext } from "./context";
import { instance } from "../axiosInstance";



//Provider that will be wrapped around the children on the layout page
const TopProvider :FC<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(BookReducer, INITIAL_STATE);

    
    const fetchTopChoice = async()=>{
      try{
        const response= await instance.get(`https://localhost:44311/api/services/app/Book/GetTop5BooksByCount`);
        dispatch(TopChoiceAction(response.data.result));
        console.log(response.data.result)
      }
      catch(error){
        console.error(error);
      }
    }
    return(
     <TopContext.Provider value={state}>
        <TopActionContext.Provider value={{fetchTopChoice}}>
            {children}
        </TopActionContext.Provider>
     </TopContext.Provider>
    )
}

export const useTopState = (): ITopStateContext => {
    const context = useContext(TopContext);
    if (!context) {
      throw new Error("useLoginState must be used within a UserProvider");
    }
    return context;
  };
  
export const useTopAction = (): ITopActionStateContext=> {
    const context = useContext(TopActionContext);
    if (!context) {
      throw new Error("useBookActions must be used within a BookProvider");
    }
    return context;
  };
  
  export const useTop = (): ITopStateContext & ITopActionStateContext => {
    return {
      ...useTopState(),
      ...useTopAction()
    };
  };

  export default TopProvider;