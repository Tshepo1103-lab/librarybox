import { useContext, useReducer, FC, PropsWithChildren} from "react"
import { BookReducer } from "./reducer";
import { INITIAL_STATE } from "./context";
import axios from 'axios';
import { BookRequestAction, CategoryAction } from "./actions";
import { BookActionContext,BookContext } from "./context";


//Provider that will be wrapped around the children on the layout page
const BookProvider :FC<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(BookReducer, INITIAL_STATE);

    //Get shelves
    const fetchShelf = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_PASS}/services/app/Shelf/GetAll`);
            dispatch(BookRequestAction(response.data.result.items));
        } catch (error) {
            console.error(error);
        }
    };

    //Get Categories
    const fetchCategory = async (id: string) => {
        try {
            const response = await axios.get(`https://localhost:44311/api/services/app/Category/GetAllIncluding?shelfId=${id}`);
            dispatch(CategoryAction(response.data.result));
            console.log(response.data.result);
        } catch (error) {
            console.error(error);
        }
    };
    return(
     <BookContext.Provider value={state}>
        <BookActionContext.Provider value={{fetchShelf}}>
            {children}
        </BookActionContext.Provider>
     </BookContext.Provider>
    )
}
export default BookProvider;

export const useBookState=()=>{
    const context=useContext(BookContext);
    return context;
 }
 export const useBookAction=()=>{
    const context=useContext(BookActionContext);
    return context;
 }