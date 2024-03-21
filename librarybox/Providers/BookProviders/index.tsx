import { useContext, useReducer } from "react"
import { bookReducer } from "./reducer"
import { CategoryAction, ShelfAction } from "./actions"
import { BookActionContext, BookStateContext } from "./context"


const BookProvider=(props:any)=>{
    const[state,dispatch]=useReducer(bookReducer,{})
    const getState=()=>({...state});
    const fetchData = async ()=>{
        try{
            const response=await fetch("https://localhost:44311/api/services/app/Shelf/GetAll");
            const json=await response.json();
            // console.log(json.result.items);
            dispatch(ShelfAction(json.result.items))
        }
        catch(error){
            console.error(error);
        }
    
    }
    const fetchCategory= async(id:string)=>{
        try{
            const response=await fetch(`https://localhost:44311/api/services/app/Category/GetAllIncluding?shelfId=${id}`);
            const json=await response.json();
            dispatch(CategoryAction(json.result))
        }
        catch(error){
            console.error(error);
        }
    }
    return(
     <BookStateContext.Provider value={getState()}>
        <BookActionContext.Provider value={{fetchData,fetchCategory}}>
            {props.children}
        </BookActionContext.Provider>
     </BookStateContext.Provider>
    )
}
export default BookProvider;

export const useBookState=()=>{
    const context=useContext(BookStateContext);
    return context;
 }
 export const useBookAction=()=>{
    const context=useContext(BookActionContext);
    return context;
 }