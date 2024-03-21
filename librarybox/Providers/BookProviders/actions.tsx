import { createAction } from "redux-actions";

export const BookActionEnums={
    SHELF:"SHELF",
    CATEGORY:"CATEGORY"
}

export const ShelfAction=createAction(
    BookActionEnums.SHELF,
    (payload:any)=>(payload)

)
export const CategoryAction=createAction(
    BookActionEnums.CATEGORY,
    (payload:any)=>(payload)
)
