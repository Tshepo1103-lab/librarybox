'use client'
import { useState } from "react";
import { useBookState } from "../../../Providers/BookProviders";
import { IBook } from "../../../Providers/BookProviders/context";
import { toInteger } from 'lodash';
import { useTopState } from "../../../Providers/TopChoiceProvider";

const useLocalStorageBook = () => {
    const [ans, setAns] = useState<IBook[]>([]);
    const state = useBookState();
    const status = useTopState();

    const setBookToLocalStorage = (bookId: string) => {
        if (state.CategoryBooks) {
            const bookList = [state.CategoryBooks[toInteger(bookId)]];
            localStorage.setItem('book', JSON.stringify(bookList));
            setAns(bookList);
        } else {
            const ans = localStorage.getItem('book');
            const newBook: IBook[] = ans ? JSON.parse(ans) : [];
            setAns(newBook);
        }
    };

    const setBookToLocalStorageTop = (bookId: string) => {
        console.log(status.FetchTopchoice)
        if (status.FetchTopchoice) {

            const bookList = [status.FetchTopchoice[toInteger(bookId)]];
            
            localStorage.setItem('book', JSON.stringify(bookList));
            setAns(bookList);
        } else {
            const ans = localStorage.getItem('book');
            const newBook: IBook[] = ans ? JSON.parse(ans) : [];
            setAns(newBook);
        }
    };

    const getBookInfo = (bookId: string): IBook | null => {
        const id = toInteger(bookId);
        const book = state.CategoryBooks ? state.CategoryBooks[id] : null;
        const topBook = status.FetchTopchoice ? status.FetchTopchoice[id] : null;

        if (topBook) {
            return topBook;
        } else if (book) {
            return book;
        } else if (ans && ans.length > 0) {
            return ans[0];
        } else {
            return null; // Added else statement here
        }
    };

    return { setBookToLocalStorage, setBookToLocalStorageTop, getBookInfo, ans };
};

export default useLocalStorageBook;
