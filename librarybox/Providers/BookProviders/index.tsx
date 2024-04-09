import { useContext, useReducer, FC, PropsWithChildren} from "react"
import { BookReducer } from "./reducer";
import { IBookActionStateContext, IBookStateContext, INITIAL_STATE, Ifilter } from "./context";
import { BookRequestAction, BooksAction, CategoryAction, SearchAction} from "./actions";
import { BookActionContext,BookContext } from "./context";
import { instance } from "../axiosInstance";



//Provider that will be wrapped around the children on the layout page
const BookProvider :FC<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(BookReducer, INITIAL_STATE);

    //Get shelves
    const fetchShelf = async () => {
        try {
            const response = await instance.get(`${process.env.NEXT_PUBLIC_PASS}/services/app/Shelf/GetAll`);
            dispatch(BookRequestAction(response.data.result.items));
        } catch (error) {
            console.error(error);
        }
    };

    //Get Categories
    const fetchCategory = async (id: string) => {

        try {
            const response = await instance.get(`${process.env.NEXT_PUBLIC_PASS}/services/app/Category/GetAllIncluding?shelfId=${id}`);
            dispatch(CategoryAction(response.data.result));
      
            
        } catch (error) {
            console.error(error);
        }
    };
    
    const fetchBooks = async (id:string)=>{
      try{
        const response = await instance.get(`${process.env.NEXT_PUBLIC_PASS}/services/app/Book/GetAllBooksByCategory?categoryId=${id}`)
        dispatch(BooksAction(response.data.result));
      }catch(err){
        console.error(err)
      }
    }
    const searchBooks = async (payload:Ifilter)=>{
      await instance.get(`${process.env.NEXT_PUBLIC_PASS}/services/app/Book/GetAllBooks?filterby=${payload.filterby}&filtervalue=${payload.filtervalue}`).
      then(response=>{
        dispatch(SearchAction(response.data.result))
        console.log(response.data.result)
      }).catch(
        response=>{
          console.log(response)
        }
      )
    }
    
    return(
     <BookContext.Provider value={state}>
        <BookActionContext.Provider value={{fetchShelf,fetchCategory,fetchBooks,searchBooks}}>
            {children}
        </BookActionContext.Provider>
     </BookContext.Provider>
    )
}

export const useBookState = (): IBookStateContext => {
    const context = useContext(BookContext);
    if (!context) {
      throw new Error("useLoginState must be used within a UserProvider");
    }
    return context;
  };
  
export const useBookAction = (): IBookActionStateContext=> {
    const context = useContext(BookActionContext);
    if (!context) {
      throw new Error("useBookActions must be used within a BookProvider");
    }
    return context;
  };
  
  export const useBook = (): IBookStateContext & IBookActionStateContext => {
    return {
      ...useBookState(),
      ...useBookAction()
    };
  };

  export default BookProvider