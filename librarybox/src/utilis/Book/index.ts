import { useState } from "react";
import { useBookState } from "../../../Providers/BookProviders";
import { IBook } from "../../../Providers/BookProviders/context";
import { toInteger } from 'lodash';


const useLocalStorageBook = () => {
    const [ans, setAns] = useState<IBook[]>([]);
    const state = useBookState();

    const setBookToLocalStorage = (bookId: string) => {
        if (state.CategoryBooks) {
            const bookList = [state.CategoryBooks[toInteger(bookId)]];
            localStorage.setItem('book', JSON.stringify(bookList));
        } else {
            const ans = localStorage.getItem('book');
            const newBook: IBook[] = ans ? JSON.parse(ans) : [];
            setAns(newBook);
            
        }
    };

    const getBookInfo = (bookId: string): IBook | null => {
        let bookData: IBook | null = null;
        const id = toInteger(bookId);
        const book = state.CategoryBooks && state.CategoryBooks[id];
        
        if (book) {
            bookData = book;
        } else if (ans && ans.length > 0) {
            bookData = ans[0];
        }
        
        return bookData;
    };

    return { setBookToLocalStorage, getBookInfo, ans };
};

export default useLocalStorageBook;
